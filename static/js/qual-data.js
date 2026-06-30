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
      { text: 'Bedroom 1', masks: [ { points: [[16.86,15.48],[16.41,16.52],[8.95,16.96],[8.05,16.09],[8.05,15.13],[9.14,14.78],[15.14,14.52],[16.5,14.61]], bbox:{x:8.05,y:14.52,w:8.81,h:2.44} } ] },
      { text: 'Bedroom 2', masks: [ { points: [[71.32,10],[71.95,8.43],[79.14,8.78],[79.59,10],[78.59,10.87],[72.32,10.87]], bbox:{x:71.32,y:8.43,w:8.27,h:2.44} } ] },
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
      // Annotator grouped rows 1-6 into one multi-mask span; distributed back into per-row spans to match step spanIndexes
      { text: 'Net Sales',  masks: [ { points:[[80.45,32.65],[86.55,32.65],[86.55,36.07],[80.45,36.07]], bbox:{x:80.45,y:32.65,w:6.1,h:3.42} } ] },   // column header
      { text: '$20.00',     masks: [ { points:[[81.36,37.95],[86.36,37.95],[86.36,42.05],[81.36,42.05]], bbox:{x:81.36,y:37.95,w:5,h:4.1} } ] },        // Mastercard row
      { text: '$20.00',     masks: [ { points:[[81.18,43.93],[87.27,43.93],[87.27,47.52],[81.18,47.52]], bbox:{x:81.18,y:43.93,w:6.09,h:3.59} } ] },    // Visa row
      { text: '$20.00',     masks: [ { points:[[81.45,49.06],[86.64,49.06],[86.64,53.5],[81.45,53.5]], bbox:{x:81.45,y:49.06,w:5.19,h:4.44} } ] },      // Discover row
      { text: '$50.00',     masks: [ { points:[[81.18,54.36],[86.55,54.36],[86.55,58.97],[81.18,58.97]], bbox:{x:81.18,y:54.36,w:5.37,h:4.61} } ] },    // American Express row
      { text: '$30.00',     masks: [ { points:[[81.18,59.49],[86.27,59.49],[86.27,64.1],[81.18,64.1]], bbox:{x:81.18,y:59.49,w:5.09,h:4.61} } ] },      // JCB row
      { text: '$20.00',     masks: [ { points:[[81,65.3],[86.55,65.3],[86.55,69.74],[81,69.74]], bbox:{x:81,y:65.3,w:5.55,h:4.44} } ] },                 // Debit row
      { text: '$150.00',    masks: [ { points:[[80.45,70.94],[86.82,70.94],[86.82,75.04],[80.45,75.04]], bbox:{x:80.45,y:70.94,w:6.37,h:4.1} } ] },     // Totals row
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
      // Annotator's multi-mask groups distributed back into the 7 per-concept spans the steps reference
      { text: 'right angled triangle', masks: [ { points:[[19.64,66.71],[24.09,66.71],[24.09,74.14],[19.64,74.14]], bbox:{x:19.64,y:66.71,w:4.45,h:7.43} } ] },     // right-angle corner marker
      { text: 'Height',  masks: [ { points:[[19.09,12.57],[21.09,12.57],[21.09,74.43],[19.09,74.43]], bbox:{x:19.09,y:12.57,w:2,h:61.86} } ] },                      // vertical leg
      { text: '3 cm',    masks: [ { points:[[8,38.71],[18.36,38.71],[18.36,46.57],[8,46.57]], bbox:{x:8,y:38.71,w:10.36,h:7.86} } ] },                               // height label
      { text: 'Width',   masks: [ { points:[[19.64,72],[88,72],[88,75.29],[19.64,75.29]], bbox:{x:19.64,y:72,w:68.36,h:3.29} } ] },                                  // horizontal leg
      { text: '4 cm',    masks: [ { points:[[42.18,77.29],[52.73,77.29],[52.73,85.14],[42.18,85.14]], bbox:{x:42.18,y:77.29,w:10.55,h:7.85} } ] },                   // width label
      { text: 'Hypotenuse', masks: [ { points:[[20.45,14.43],[21,13],[87,72],[86.27,73.71]], bbox:{x:20.45,y:13,w:66.55,h:60.71} } ] },                              // diagonal
      { text: 'x cm',    masks: [ { points:[[50.91,32],[62.82,32],[62.82,39.14],[50.91,39.14]], bbox:{x:50.91,y:32,w:11.91,h:7.14} } ] },                            // x label
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
      // Annotator grouped endpoints together and line+label together; distributed back into 7 per-concept spans
      { text: 'Beijing',     masks: [ { points:[[72,55.06],[77,55.06],[77,59.74],[72,59.74]], bbox:{x:72,y:55.06,w:5,h:4.68} } ] },                   // city pin — east/right
      { text: 'Zhangjiakou', masks: [ { points:[[19.82,53.18],[28.91,53.18],[28.91,57.68],[19.82,57.68]], bbox:{x:19.82,y:53.18,w:9.09,h:4.5} } ] }, // city pin — west/left
      { text: 'Yanqing',     masks: [ { points:[[48.91,50.56],[55.27,50.56],[55.27,54.31],[48.91,54.31]], bbox:{x:48.91,y:50.56,w:6.36,h:3.75} } ] }, // city pin — middle
      { text: 'dashed line', masks: [ { points:[[54.45,74.91],[54.82,73.97],[55.82,74.34],[61.91,76.78],[63.91,78.09],[66.73,78.28],[67.45,78.65],[67.18,80.15],[63.73,79.78],[60.45,78.46],[58.09,76.78],[55.82,75.66]], bbox:{x:54.45,y:73.97,w:13,h:6.18} } ] },   // Beijing→Yanqing rail arc
      { text: '20 mins',     masks: [ { points:[[63.55,75.09],[67.09,75.09],[67.09,78.28],[63.55,78.28]], bbox:{x:63.55,y:75.09,w:3.54,h:3.19} } ] },                                                                                                                  // travel-time label
      { text: 'dashed line', masks: [ { points:[[27.64,76.97],[31.36,77.72],[35.82,79.4],[38.73,79.4],[41.36,78.46],[45.36,76.22],[49.09,73.6],[48.82,75.09],[45.18,77.53],[41.91,79.78],[39.64,80.9],[34.27,81.09],[31.09,79.59],[28.09,78.84]], bbox:{x:27.64,y:73.6,w:21.45,h:7.49} } ] }, // Yanqing→Zhangjiakou rail arc
      { text: '40 mins',     masks: [ { points:[[38.55,76.4],[42.64,76.4],[42.64,79.03],[38.55,79.03]], bbox:{x:38.55,y:76.4,w:4.09,h:2.63} } ] },                                                                                                                     // travel-time label
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
      // Annotator's 4 groups distributed back into the 7 per-concept spans the steps reference
      { text: 'Cost',          masks: [ { points:[[52.95,21.21],[59.14,21.21],[59.14,24.48],[52.95,24.48]], bbox:{x:52.95,y:21.21,w:6.19,h:3.27} } ] },               // column header
      { text: 'Blood Test',    masks: [ { points:[[23.68,31.1],[35.59,31.1],[35.59,34.09],[23.68,34.09]], bbox:{x:23.68,y:31.1,w:11.91,h:2.99} } ] },                 // row label
      { text: '$50',           masks: [ { points:[[53.05,31.01],[57.23,31.01],[57.23,34.45],[53.05,34.45]], bbox:{x:53.05,y:31.01,w:4.18,h:3.44} } ] },               // cost cell
      { text: '5% discount',   masks: [ { points:[[28.86,43.34],[41.77,43.34],[41.77,46.42],[28.86,46.42]], bbox:{x:28.86,y:43.34,w:12.91,h:3.08} } ] },              // footnote
      { text: 'premium',       masks: [ { points:[[79.05,15.32],[79.23,14.23],[80.23,13.78],[81.23,13.96],[86.41,14.6],[87.32,15.14],[88.14,16.14],[87.41,17.14],[83.23,16.41]], bbox:{x:79.05,y:13.78,w:9.09,h:3.36} } ] }, // plan badge
      { text: 'Claim',         masks: [ { points:[[74.41,21.21],[81.32,21.21],[81.32,24.21],[74.41,24.21]], bbox:{x:74.41,y:21.21,w:6.91,h:3} } ] },                  // column header
      { text: '$20',           masks: [ { points:[[74.59,30.92],[78.59,30.92],[78.59,34],[74.59,34]], bbox:{x:74.59,y:30.92,w:4,h:3.08} } ] },                        // claim cell
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
      { text: 'penguins', masks: [
        { points:[[64.45,39.97],[65.27,37.63],[67.91,36.33],[68.36,35.16],[68.55,33.85],[68.55,26.43],[68.55,23.31],[68.91,21.61],[69.45,19.92],[70.09,18.75],[70.91,17.45],[72.64,16.8],[74.09,17.06],[74.73,18.1],[75.27,19.14],[75.36,20.57],[73.91,21.61],[73.73,22.79],[74.27,24.48],[74.91,26.95],[74.91,27.6],[75.18,30.21],[75.09,32.68],[74.73,34.38],[74.55,35.55],[75,37.37],[75.27,38.54],[75.55,40.63],[75.18,42.45],[74.36,42.32],[73.36,41.28],[71.55,41.8],[70.36,42.06],[65.36,41.67],[64.55,41.54]], bbox:{x:64.45,y:16.8,w:11.1,h:25.65} }
      ] },
      { text: 'arrows from penguins', masks: [
        { points:[[60.64,27.08],[61.91,25.91],[62.45,26.82],[68.09,26.82],[68,27.99],[62.55,27.86],[62.45,28.52],[61.91,28.65]], bbox:{x:60.64,y:25.91,w:7.45,h:2.74} },
        { points:[[58.55,18.23],[58.82,19.79],[59.73,19.79],[67.18,25.13],[68,23.44],[60.73,18.23],[60.55,17.19]], bbox:{x:58.55,y:17.19,w:9.45,h:7.94} }
      ] },
      { text: 'smaller toothed whales', masks: [
        { points:[[47.36,20.31],[55.27,20.57],[55.64,18.23],[61.45,17.19],[62.45,14.71],[48.09,14.06],[50.73,12.11],[52.55,13.54],[54.27,13.28],[54.82,11.85],[52.73,6.64],[50.27,7.29],[43.45,6.77],[42.55,3.65],[40.91,3.39],[40.27,3.65],[40.09,7.16],[32.36,13.8],[31.91,15.89],[32.09,16.54],[34.91,18.49],[36.91,19.01],[38.27,19.4],[40.18,18.1],[42.45,17.06],[46.64,18.36]], bbox:{x:31.91,y:3.39,w:30.54,h:17.18} }
      ] },
      { text: 'leopard seal', masks: [
        { points:[[39.45,27.47],[50.82,22.79],[53.45,22.92],[54.18,23.96],[56.09,24.09],[59.45,24.61],[60.73,26.17],[59.73,31.9],[60,34.64],[59.55,35.94],[45,35.68],[44.91,33.72],[46.27,31.64],[47,30.99],[44.82,29.56],[42.55,30.34],[40.82,30.08],[39.64,29.04]], bbox:{x:39.45,y:22.79,w:21.28,h:13.15} }
      ] },
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
