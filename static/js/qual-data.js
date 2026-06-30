/* ══════════════════════════════════════════════════════════
   DoCoG Qualitative Demo — Example Data
   ──────────────────────────────────────────────────────────
   All step text and [GND] placement below is transcribed
   verbatim from the published qualitative figures.

   MASKS ARE PLACEHOLDERS. Every `points` / `bbox` value was
   typed by hand as a rough guess, NOT annotated against the
   real images. Re-draw every mask using mask-annotator-v3
   before shipping — search for "PLACEHOLDER" to find them all.
   ══════════════════════════════════════════════════════════ */

const DOCOG_EXAMPLES = [

  /* ════════════════════ 1. FLOOR PLAN ════════════════════ */
  {
    id: 'floorplan',
    label: 'Floor Plan',
    image: 'static/images/qual/originals/qual_res_1_floorplan.png',
    question: 'How many bedrooms are present in this floor plan?',

    spans: [
      { text: 'Bedroom 1', masks: [ { points: [[10,8],[22,8],[22,14],[10,14]], bbox:{x:10,y:8,w:12,h:6} } ] },   // PLACEHOLDER
      { text: 'Bedroom 2', masks: [ { points: [[62,4],[74,4],[74,10],[62,10]], bbox:{x:62,y:4,w:12,h:6} } ] },   // PLACEHOLDER
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'Look at ' },
          { type:'span_start', spanIndex:0 },
          { type:'text', content:'Bedroom 1' },
          { type:'span_end' },
          { type:'ground', spanIndex:0 },
          { type:'text', content:' on the left side of the floor plan.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'text', content:'Look at ' },
          { type:'span_start', spanIndex:1 },
          { type:'text', content:'Bedroom 2' },
          { type:'span_end' },
          { type:'ground', spanIndex:1 },
          { type:'text', content:' on the right side of the floor plan.' },
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'text', content:'There are 2 rooms.' }
        ]
      }
    ]
  },

  /* ═══════════════════ 2. CREDIT CARD ═══════════════════ */
  {
    id: 'creditcard',
    label: 'Credit Card',
    image: 'static/images/qual/originals/qual_res_2_creditcard.png',
    question: 'Does the Net Sales total equal the sum of the Net Sales values?',

    spans: [
      { text: 'Net Sales',  masks: [ { points:[[68,16],[82,16],[82,19],[68,19]], bbox:{x:68,y:16,w:14,h:3} } ] }, // PLACEHOLDER — column header
      { text: '$20.00',     masks: [ { points:[[68,22],[82,22],[82,25],[68,25]], bbox:{x:68,y:22,w:14,h:3} } ] }, // PLACEHOLDER — Mastercard row
      { text: '$20.00',     masks: [ { points:[[68,26],[82,26],[82,29],[68,29]], bbox:{x:68,y:26,w:14,h:3} } ] }, // PLACEHOLDER — Visa row
      { text: '$20.00',     masks: [ { points:[[68,30],[82,30],[82,33],[68,33]], bbox:{x:68,y:30,w:14,h:3} } ] }, // PLACEHOLDER — Discover row
      { text: '$50.00',     masks: [ { points:[[68,34],[82,34],[82,37],[68,37]], bbox:{x:68,y:34,w:14,h:3} } ] }, // PLACEHOLDER — American Express row
      { text: '$30.00',     masks: [ { points:[[68,38],[82,38],[82,41],[68,41]], bbox:{x:68,y:38,w:14,h:3} } ] }, // PLACEHOLDER — JCB row
      { text: '$20.00',     masks: [ { points:[[68,42],[82,42],[82,45],[68,45]], bbox:{x:68,y:42,w:14,h:3} } ] }, // PLACEHOLDER — Debit row
      { text: '$150.00',    masks: [ { points:[[68,47],[82,47],[82,50],[68,50]], bbox:{x:68,y:47,w:14,h:3} } ] }, // PLACEHOLDER — Totals row
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'Look at the ' },
          { type:'span_start', spanIndex:0 },
          { type:'text', content:'Net Sales' },
          { type:'span_end' },
          { type:'ground', spanIndex:0 },
          { type:'text', content:' column.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'text', content:'For each row, ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'$20.00' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:', ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'$20.00' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:', ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'$20.00' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:', ' },
          { type:'span_start', spanIndex:4 }, { type:'text', content:'$50.00' }, { type:'span_end' }, { type:'ground', spanIndex:4 },
          { type:'text', content:', ' },
          { type:'span_start', spanIndex:5 }, { type:'text', content:'$30.00' }, { type:'span_end' }, { type:'ground', spanIndex:5 },
          { type:'text', content:', ' },
          { type:'span_start', spanIndex:6 }, { type:'text', content:'$20.00' }, { type:'span_end' }, { type:'ground', spanIndex:6 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S3',
        tokens: [
          { type:'text', content:'Add them: 20 + 20 + 20 + 50 + 30 + 20 = 160.' }
        ]
      },
      {
        label: 'S4',
        tokens: [
          { type:'text', content:'So the summed Net Sales across rows is $160.00.' }
        ]
      },
      {
        label: 'S5',
        tokens: [
          { type:'text', content:'Now look at the total value under Net Sales, which is ' },
          { type:'span_start', spanIndex:7 },
          { type:'text', content:'$150.00' },
          { type:'span_end' },
          { type:'ground', spanIndex:7 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S6',
        tokens: [
          { type:'text', content:'Since $160.00 ≠ $150.00, the total is incorrect.' }
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'text', content:'The net sales total is wrong.' }
        ]
      }
    ]
  },

  /* ═══════════════════════ 3. TRIANGLE ═══════════════════════ */
  {
    id: 'triangle',
    label: 'Triangle',
    image: 'static/images/qual/originals/qual_res_3_triangle.png',
    question: 'Find the value of x?',

    spans: [
      { text: 'right angled triangle', masks: [ { points:[[20,5],[20,42],[88,42]], bbox:{x:20,y:5,w:68,h:37} } ] },     // PLACEHOLDER — whole triangle outline
      { text: 'Height',  masks: [ { points:[[14,5],[20,5],[20,42],[14,42]], bbox:{x:14,y:5,w:6,h:37} } ] },             // PLACEHOLDER — vertical leg
      { text: '3 cm',    masks: [ { points:[[10,20],[20,20],[20,25],[10,25]], bbox:{x:10,y:20,w:10,h:5} } ] },         // PLACEHOLDER — height label
      { text: 'Width',   masks: [ { points:[[20,42],[88,42],[88,46],[20,46]], bbox:{x:20,y:42,w:68,h:4} } ] },         // PLACEHOLDER — horizontal leg
      { text: '4 cm',    masks: [ { points:[[40,46],[55,46],[55,50],[40,50]], bbox:{x:40,y:46,w:15,h:4} } ] },         // PLACEHOLDER — width label
      { text: 'Hypotenuse', masks: [ { points:[[20,5],[88,42],[88,38],[20,2]], bbox:{x:20,y:2,w:68,h:40} } ] },        // PLACEHOLDER — diagonal
      { text: 'x cm',    masks: [ { points:[[55,15],[70,15],[70,20],[55,20]], bbox:{x:55,y:15,w:15,h:5} } ] },        // PLACEHOLDER — x label
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'The triangle is ' },
          { type:'span_start', spanIndex:0 },
          { type:'text', content:'right angled triangle' },
          { type:'span_end' },
          { type:'ground', spanIndex:0 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'span_start', spanIndex:1 }, { type:'text', content:'Height' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:' is ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'3 cm' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:' and ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'Width' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:' is ' },
          { type:'span_start', spanIndex:4 }, { type:'text', content:'4 cm' }, { type:'span_end' }, { type:'ground', spanIndex:4 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S3',
        tokens: [
          { type:'span_start', spanIndex:5 }, { type:'text', content:'Hypotenuse' }, { type:'span_end' }, { type:'ground', spanIndex:5 },
          { type:'text', content:' is ' },
          { type:'span_start', spanIndex:6 }, { type:'text', content:'x cm' }, { type:'span_end' }, { type:'ground', spanIndex:6 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S4',
        tokens: [
          { type:'text', content:"Using Pythagoras' theorem, x² = 3² + 4², x² = 25, hence x = 5." }
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'text', content:'The value of ' },
          { type:'span_start', spanIndex:6 },
          { type:'text', content:'x' },
          { type:'span_end' },
          { type:'ground', spanIndex:6 },
          { type:'text', content:' is 5.' },
        ]
      }
    ]
  },

  /* ═══════════════════════ 4. OLYMPICS ═══════════════════════ */
  {
    id: 'olympics',
    label: 'Olympics',
    image: 'static/images/qual/originals/qual_res_4_olympics.png',
    question: 'What is the travel time by rail line from Beijing to Zhangjiakou?',

    spans: [
      { text: 'Beijing',      masks: [ { points:[[75,25],[85,25],[85,32],[75,32]], bbox:{x:75,y:25,w:10,h:7} } ] },  // PLACEHOLDER — pin
      { text: 'Zhangjiakou',  masks: [ { points:[[10,25],[22,25],[22,32],[10,32]], bbox:{x:10,y:25,w:12,h:7} } ] },  // PLACEHOLDER — pin
      { text: 'Yanqing',      masks: [ { points:[[45,22],[57,22],[57,29],[45,29]], bbox:{x:45,y:22,w:12,h:7} } ] },  // PLACEHOLDER — pin
      { text: 'dashed line',  masks: [ { points:[[57,30],[75,30],[75,34],[57,34]], bbox:{x:57,y:30,w:18,h:4} } ] },  // PLACEHOLDER — Beijing-Yanqing line
      { text: '20 mins',      masks: [ { points:[[63,32],[72,32],[72,35],[63,35]], bbox:{x:63,y:32,w:9,h:3} } ] },   // PLACEHOLDER — label
      { text: 'dashed line',  masks: [ { points:[[22,30],[45,30],[45,35],[22,35]], bbox:{x:22,y:30,w:23,h:5} } ] },  // PLACEHOLDER — Yanqing-Zhangjiakou line
      { text: '40 mins',      masks: [ { points:[[30,33],[40,33],[40,36],[30,36]], bbox:{x:30,y:33,w:10,h:3} } ] },  // PLACEHOLDER — label
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'Locate the starting point, ' },
          { type:'span_start', spanIndex:0 }, { type:'text', content:'Beijing' }, { type:'span_end' }, { type:'ground', spanIndex:0 },
          { type:'text', content:', and ending point, ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'Zhangjiakou' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'text', content:'Notice the intermediate location, ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'Yanqing' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S3',
        tokens: [
          { type:'text', content:'Travel time marked on the ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'dashed line' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:' from ' },
          { type:'span_start', spanIndex:0 }, { type:'text', content:'Beijing' }, { type:'span_end' }, { type:'ground', spanIndex:0 },
          { type:'text', content:' to ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'Yanqing' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:', which is ' },
          { type:'span_start', spanIndex:4 }, { type:'text', content:'20 mins' }, { type:'span_end' }, { type:'ground', spanIndex:4 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S4',
        tokens: [
          { type:'text', content:'Travel time marked on the ' },
          { type:'span_start', spanIndex:5 }, { type:'text', content:'dashed line' }, { type:'span_end' }, { type:'ground', spanIndex:5 },
          { type:'text', content:' from ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'Yanqing' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:' to ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'Zhangjiakou' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:', which is ' },
          { type:'span_start', spanIndex:6 }, { type:'text', content:'40 mins' }, { type:'span_end' }, { type:'ground', spanIndex:6 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'text', content:'The total estimated travel time is 60 mins (' },
          { type:'span_start', spanIndex:6 }, { type:'text', content:'40' }, { type:'span_end' }, { type:'ground', spanIndex:6 },
          { type:'text', content:' + ' },
          { type:'span_start', spanIndex:4 }, { type:'text', content:'20' }, { type:'span_end' }, { type:'ground', spanIndex:4 },
          { type:'text', content:').' },
        ]
      }
    ]
  },

  /* ═════════════════════ 5. MEDICAL BILL ═════════════════════ */
  {
    id: 'medicalbill',
    label: 'Medical Bill',
    image: 'static/images/qual/originals/qual_res_5_medicalbill.png',
    question: 'How much should I pay for Blood Test?',

    spans: [
      { text: 'Cost',          masks: [ { points:[[42,12],[55,12],[55,15],[42,15]], bbox:{x:42,y:12,w:13,h:3} } ] }, // PLACEHOLDER — column header
      { text: 'Blood Test',    masks: [ { points:[[22,16],[40,16],[40,19],[22,19]], bbox:{x:22,y:16,w:18,h:3} } ] }, // PLACEHOLDER — row label
      { text: '$50',           masks: [ { points:[[42,16],[50,16],[50,19],[42,19]], bbox:{x:42,y:16,w:8,h:3} } ] },  // PLACEHOLDER — cost cell
      { text: '5% discount',   masks: [ { points:[[28,22],[48,22],[48,25],[28,25]], bbox:{x:28,y:22,w:20,h:3} } ] }, // PLACEHOLDER — footnote
      { text: 'premium',       masks: [ { points:[[60,7],[75,7],[75,10],[60,10]], bbox:{x:60,y:7,w:15,h:3} } ] },   // PLACEHOLDER — plan badge
      { text: 'Claim',         masks: [ { points:[[58,12],[70,12],[70,15],[58,15]], bbox:{x:58,y:12,w:12,h:3} } ] }, // PLACEHOLDER — column header
      { text: '$20',           masks: [ { points:[[58,16],[66,16],[66,19],[58,19]], bbox:{x:58,y:16,w:8,h:3} } ] },  // PLACEHOLDER — claim cell
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'Look at the ' },
          { type:'span_start', spanIndex:0 }, { type:'text', content:'Cost' }, { type:'span_end' }, { type:'ground', spanIndex:0 },
          { type:'text', content:' of the ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'Blood Test' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:', which is ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'$50' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'text', content:'Notice the ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'5% discount' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:' applied to the Cost for premium members.' },
        ]
      },
      {
        label: 'S3',
        tokens: [
          { type:'text', content:'Your plan is ' },
          { type:'span_start', spanIndex:4 }, { type:'text', content:'premium' }, { type:'span_end' }, { type:'ground', spanIndex:4 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S4',
        tokens: [
          { type:'text', content:'5% of 50 is 2.50.' }
        ]
      },
      {
        label: 'S5',
        tokens: [
          { type:'text', content:'The discounted cost: ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'$50' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:' - $2.50 = $47.50.' },
        ]
      },
      {
        label: 'S6',
        tokens: [
          { type:'text', content:'Look at the ' },
          { type:'span_start', spanIndex:5 }, { type:'text', content:'Claim' }, { type:'span_end' }, { type:'ground', spanIndex:5 },
          { type:'text', content:' amount for the ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'Blood Test' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:', which is ' },
          { type:'span_start', spanIndex:6 }, { type:'text', content:'$20' }, { type:'span_end' }, { type:'ground', spanIndex:6 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S7',
        tokens: [
          { type:'text', content:'Subtract this from the discounted cost: $47.50 - $20 = $27.50.' }
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'text', content:'You should pay $27.50.' }
        ]
      }
    ]
  },

  /* ═══════════════════════ 6. FOOD WEB ═══════════════════════ */
  {
    id: 'foodweb',
    label: 'Food Web',
    image: 'static/images/qual/originals/qual_res_6_foodweb.png',
    question: 'Who eats penguins?',

    spans: [
      { text: 'penguins',                masks: [ { points:[[68,16],[80,16],[80,28],[68,28]], bbox:{x:68,y:16,w:12,h:12} } ] }, // PLACEHOLDER
      { text: 'arrows from penguins',    masks: [ { points:[[58,12],[68,12],[68,22],[58,22]], bbox:{x:58,y:12,w:10,h:10} } ] }, // PLACEHOLDER — the two blue arrows
      { text: 'smaller toothed whales',  masks: [ { points:[[42,4],[58,4],[58,14],[42,14]], bbox:{x:42,y:4,w:16,h:10} } ] },    // PLACEHOLDER
      { text: 'leopard seal',            masks: [ { points:[[45,16],[60,16],[60,26],[45,26]], bbox:{x:45,y:16,w:15,h:10} } ] }, // PLACEHOLDER
    ],

    steps: [
      {
        label: 'S1',
        tokens: [
          { type:'text', content:'Look at the ' },
          { type:'span_start', spanIndex:0 }, { type:'text', content:'penguins' }, { type:'span_end' }, { type:'ground', spanIndex:0 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S2',
        tokens: [
          { type:'text', content:'Look at out ' },
          { type:'span_start', spanIndex:1 }, { type:'text', content:'arrows from penguins' }, { type:'span_end' }, { type:'ground', spanIndex:1 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'S3',
        tokens: [
          { type:'text', content:'It points to ' },
          { type:'span_start', spanIndex:2 }, { type:'text', content:'smaller toothed whales' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:' and ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'leopard seal' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:'.' },
        ]
      },
      {
        label: 'Sf',
        tokens: [
          { type:'span_start', spanIndex:2 }, { type:'text', content:'Smaller toothed whales' }, { type:'span_end' }, { type:'ground', spanIndex:2 },
          { type:'text', content:' and ' },
          { type:'span_start', spanIndex:3 }, { type:'text', content:'leopard seal' }, { type:'span_end' }, { type:'ground', spanIndex:3 },
          { type:'text', content:' eats ' },
          { type:'span_start', spanIndex:0 }, { type:'text', content:'penguins' }, { type:'span_end' }, { type:'ground', spanIndex:0 },
          { type:'text', content:'.' },
        ]
      }
    ]
  },

];
