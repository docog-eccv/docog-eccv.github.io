/* ══════════════════════════════════════════════════════════
   DoCoG Interactive Qual Demo — Engine
   Reads DOCOG_EXAMPLES from qual-data.js (loaded first).
   No example-specific data is hardcoded here.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const CHAR_DELAY = 28; // ms per character during streaming

  const SPAN_COLORS = [
    { fill: 'rgba(79,126,248,0.18)',  border: '#4f7ef8' }, // blue
    { fill: 'rgba(72,199,142,0.18)',  border: '#48c78e' }, // green
    { fill: 'rgba(168,85,247,0.18)', border: '#a855f7' }, // purple
    { fill: 'rgba(236,72,153,0.18)', border: '#ec4899' }, // pink
    { fill: 'rgba(6,182,212,0.18)',   border: '#06b6d4' }, // cyan
    { fill: 'rgba(132,204,22,0.18)', border: '#84cc16' }, // lime
    { fill: 'rgba(234,179,8,0.18)',  border: '#eab308' }, // amber
    { fill: 'rgba(20,184,166,0.18)', border: '#14b8a6' }, // teal
  ];

  // ── State ────────────────────────────────────────────────
  let currentExIdx = 0;
  let activeGenId = 0;   // Incremented on reset/tab-switch; cancels in-flight streaming
  let maskGenId   = 0;   // Incremented on each showSpanMasks call; cancels in-flight mask anims
  let currentlyShownSpanIdx = null;

  // ── DOM refs (populated in init) ─────────────────────────
  let tabsEl, imgEl, svgEl, defsEl, bubbleEl, sendBtn, stepsEl, resetRow, resetBtn, chatPanel;

  // ══════════════════════════════════════════════════════════
  // TAB BUILDING
  // ══════════════════════════════════════════════════════════
  function buildTabs() {
    tabsEl.innerHTML = DOCOG_EXAMPLES.map((ex, i) =>
      `<button class="qd-tab${i === 0 ? ' on' : ''}" data-i="${i}">${ex.label}</button>`
    ).join('');
    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.qd-tab');
      if (btn) switchExample(+btn.dataset.i);
    });
  }

  // ══════════════════════════════════════════════════════════
  // EXAMPLE SWITCHING
  // ══════════════════════════════════════════════════════════
  function switchExample(i) {
    activeGenId++;
    clearAllMasks(true);
    currentExIdx = i;
    currentlyShownSpanIdx = null;

    tabsEl.querySelectorAll('.qd-tab').forEach((btn, j) =>
      btn.classList.toggle('on', j === i)
    );

    const ex = DOCOG_EXAMPLES[i];
    imgEl.src = ex.image;
    imgEl.alt = ex.label + ' document';
    bubbleEl.textContent = ex.question;
    stepsEl.innerHTML = '';
    resetRow.style.display = 'none';
    sendBtn.disabled = false;
    chatPanel.scrollTop = 0;
  }

  // ══════════════════════════════════════════════════════════
  // SVG MASK HELPERS
  // ══════════════════════════════════════════════════════════
  function clearAllMasks(instant) {
    maskGenId++;
    const groups = svgEl.querySelectorAll('.qd-mask-group');
    if (instant || !groups.length) {
      groups.forEach(el => el.remove());
      defsEl.innerHTML = '';
    } else {
      groups.forEach(g => {
        g.style.transition = 'opacity 150ms';
        g.style.opacity = '0';
      });
      setTimeout(() => {
        svgEl.querySelectorAll('.qd-mask-group').forEach(el => el.remove());
        defsEl.innerHTML = '';
      }, 150);
    }
    currentlyShownSpanIdx = null;
  }

  function showSpanMasks(spanIdx) {
    const ex    = DOCOG_EXAMPLES[currentExIdx];
    const span  = ex.spans[spanIdx];
    const color = SPAN_COLORS[spanIdx % SPAN_COLORS.length];

    maskGenId++;
    const myMaskGen = maskGenId;

    // Fade out currently visible masks before showing new ones
    const existing = svgEl.querySelectorAll('.qd-mask-group');
    existing.forEach(g => {
      g.style.transition = 'opacity 150ms';
      g.style.opacity = '0';
    });

    const delay = existing.length ? 150 : 0;

    setTimeout(() => {
      if (myMaskGen !== maskGenId) return; // Superseded by a newer call

      svgEl.querySelectorAll('.qd-mask-group').forEach(el => el.remove());
      defsEl.innerHTML = '';
      currentlyShownSpanIdx = spanIdx;

      span.masks.forEach((mask, mi) => {
        const clipId = `qdc-${spanIdx}-${mi}-${myMaskGen}`;

        // ClipPath with a rect that sweeps left-to-right
        const clipEl = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipEl.id = clipId;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', mask.bbox.x);
        rect.setAttribute('y', '0');
        rect.setAttribute('width', '0');
        rect.setAttribute('height', '100');
        clipEl.appendChild(rect);
        defsEl.appendChild(clipEl);

        // Polygon group clipped by the sweeping rect
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('qd-mask-group');
        group.setAttribute('clip-path', `url(#${clipId})`);

        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', mask.points.map(p => p.join(',')).join(' '));
        poly.setAttribute('fill', color.fill);
        poly.setAttribute('stroke', color.border);
        poly.setAttribute('stroke-width', '0.6');
        poly.setAttribute('stroke-linejoin', 'round');

        group.appendChild(poly);
        svgEl.appendChild(group);

        // Animate the clip rect width: ease-out quadratic over 600ms
        const targetW  = mask.bbox.w + 1;
        const duration = 600;
        const t0       = performance.now();

        function stepAnim(now) {
          if (myMaskGen !== maskGenId) return;
          const t      = Math.min((now - t0) / duration, 1);
          const eased  = t * (2 - t); // ease-out quadratic
          rect.setAttribute('width', (eased * targetW).toFixed(3));
          if (t < 1) requestAnimationFrame(stepAnim);
        }
        requestAnimationFrame(stepAnim);
      });
    }, delay);
  }

  // ══════════════════════════════════════════════════════════
  // TOKEN OP BUILDER
  // Flattens the token stream into a linear sequence of ops:
  //   span_start | span_end | ground | char
  // ══════════════════════════════════════════════════════════
  function buildOps(step) {
    const ops = [];
    for (const tok of step.tokens) {
      if (tok.type === 'text') {
        for (const ch of tok.content) ops.push({ type: 'char', ch });
      } else {
        ops.push(tok); // span_start / span_end / ground pass through
      }
    }
    return ops;
  }

  // ══════════════════════════════════════════════════════════
  // CHIP FACTORY
  // ══════════════════════════════════════════════════════════
  function createChip(spanIdx) {
    const color = SPAN_COLORS[spanIdx % SPAN_COLORS.length];
    const ex    = DOCOG_EXAMPLES[currentExIdx];
    const chip  = document.createElement('button');
    chip.className        = 'qd-gnd-chip';
    chip.style.background = color.border;
    chip.title            = ex.spans[spanIdx] ? ex.spans[spanIdx].text : '';
    chip.dataset.spanIndex = spanIdx;
    chip.innerHTML        = '&#9679;'; // ●
    chip.addEventListener('click', () => handleChipClick(chip, spanIdx));
    return chip;
  }

  function handleChipClick(chipEl, spanIdx) {
    // Remove active state from all chips, apply to this one
    document.querySelectorAll('.qd-gnd-chip-active')
      .forEach(c => c.classList.remove('qd-gnd-chip-active'));
    chipEl.classList.add('qd-gnd-chip-active');
    setTimeout(() => chipEl.classList.remove('qd-gnd-chip-active'), 500);

    if (currentlyShownSpanIdx === spanIdx) return; // Idempotent
    showSpanMasks(spanIdx);
  }

  // ══════════════════════════════════════════════════════════
  // STREAMING — one step at a time, char by char
  // ══════════════════════════════════════════════════════════
  function streamStep(stepIdx, genId, onAllDone) {
    if (genId !== activeGenId) return;

    const ex = DOCOG_EXAMPLES[currentExIdx];
    if (stepIdx >= ex.steps.length) {
      onAllDone();
      return;
    }

    const step    = ex.steps[stepIdx];
    const isFinal = step.label === 'Sf';

    // Create step row (starts invisible, fades+slides in)
    const rowEl = document.createElement('div');
    rowEl.className    = 'qd-step-row';
    rowEl.style.cssText = 'opacity:0;transform:translateY(10px);';

    const labelEl = document.createElement('span');
    labelEl.className   = 'qd-step-label' + (isFinal ? ' qd-step-label-final' : '');
    labelEl.textContent = step.label;

    const textEl = document.createElement('span');
    textEl.className = 'qd-step-text';

    rowEl.appendChild(labelEl);
    rowEl.appendChild(textEl);
    stepsEl.appendChild(rowEl);
    chatPanel.scrollTop = chatPanel.scrollHeight;

    // Trigger fade+slide animation
    requestAnimationFrame(() => {
      rowEl.style.transition  = 'opacity 300ms ease, transform 300ms ease';
      rowEl.style.opacity     = '1';
      rowEl.style.transform   = 'translateY(0)';
    });

    // Stream tokens character by character
    const ops            = buildOps(step);
    let   opIdx          = 0;
    let   currentContainer = textEl;
    const spanStack      = [];

    function processOp() {
      if (genId !== activeGenId) return;
      if (opIdx >= ops.length) {
        // Step done — brief pause before next step
        setTimeout(() => streamStep(stepIdx + 1, genId, onAllDone), 250);
        return;
      }

      const op = ops[opIdx++];

      switch (op.type) {
        case 'span_start': {
          const color  = SPAN_COLORS[op.spanIndex % SPAN_COLORS.length];
          const spanEl = document.createElement('span');
          spanEl.className    = 'qd-span';
          spanEl.style.background = color.fill;
          spanEl.style.color      = color.border;
          currentContainer.appendChild(spanEl);
          spanStack.push({ el: spanEl, parent: currentContainer });
          currentContainer = spanEl;
          processOp();
          break;
        }
        case 'span_end': {
          if (spanStack.length > 0) currentContainer = spanStack.pop().parent;
          processOp();
          break;
        }
        case 'ground': {
          // Append chip to current text position (always outside spans in this data)
          const chip = createChip(op.spanIndex);
          currentContainer.appendChild(chip);
          // Trigger mask sweep for this grounding event
          showSpanMasks(op.spanIndex);
          chatPanel.scrollTop = chatPanel.scrollHeight;
          processOp();
          break;
        }
        case 'char': {
          currentContainer.appendChild(document.createTextNode(op.ch));
          setTimeout(processOp, CHAR_DELAY);
          break;
        }
      }
    }

    processOp();
  }

  // ══════════════════════════════════════════════════════════
  // START / RESET
  // ══════════════════════════════════════════════════════════
  function startStreaming() {
    activeGenId++;
    const genId = activeGenId;

    clearAllMasks(true);
    stepsEl.innerHTML = '';
    resetRow.style.display = 'none';
    sendBtn.disabled = true;

    streamStep(0, genId, () => {
      if (genId !== activeGenId) return;
      // Final state: if Sf has no ground events, clear masks so image is clean
      const ex       = DOCOG_EXAMPLES[currentExIdx];
      const sfStep   = ex.steps[ex.steps.length - 1];
      const sfHasGnd = sfStep.tokens.some(t => t.type === 'ground');
      if (!sfHasGnd) clearAllMasks(false);
      resetRow.style.display = 'flex';
    });
  }

  function resetDemo() {
    activeGenId++;
    clearAllMasks(true);
    stepsEl.innerHTML = '';
    resetRow.style.display = 'none';
    sendBtn.disabled = false;
    currentlyShownSpanIdx = null;
    chatPanel.scrollTop = 0;
  }

  // ══════════════════════════════════════════════════════════
  // INIT
  // ══════════════════════════════════════════════════════════
  function init() {
    tabsEl    = document.getElementById('qdTabs');
    imgEl     = document.getElementById('qdImg');
    svgEl     = document.getElementById('qdSvg');
    defsEl    = document.getElementById('qdDefs');
    bubbleEl  = document.getElementById('qdBubble');
    sendBtn   = document.getElementById('qdSendBtn');
    stepsEl   = document.getElementById('qdSteps');
    resetRow  = document.getElementById('qdResetRow');
    resetBtn  = document.getElementById('qdResetBtn');
    chatPanel = document.querySelector('.qd-chat-panel');

    if (!tabsEl) return; // Section not present — nothing to do

    buildTabs();
    switchExample(0);

    sendBtn.addEventListener('click', startStreaming);
    resetBtn.addEventListener('click', resetDemo);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
