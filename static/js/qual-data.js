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

  /* ════════════════════ 1. FOOD WEB ════════════════════ */
  {
    id: 'foodweb',
    label: 'Food Web',
    image: 'static/images/qual/originals/qual_res_6_foodweb.png',
    question: 'Who eats penguins?',

    spans: [
      { text: 'penguins', masks: [
        { points:[[65.14,39.5],[65.05,38],[68.68,37.75],[68.95,37],[69.05,35.38],[69.95,33.63],[69.59,30.38],[69.32,27.38],[69.41,23.75],[69.86,19],[72.41,15.13],[74.95,14.63],[75.68,16],[77.5,17.63],[77.59,18.5],[75.68,18.13],[75.05,18.5],[75.14,20],[77.05,26.88],[77.14,33.38],[76.14,34.38],[76.95,36.38],[76.14,37.13],[75.5,37.63],[77.23,37.88],[77.23,40.25],[72.77,40.63],[67.59,40.5]], bbox:{x:65.05,y:14.63,w:12.54,h:26} }
      ] },
      { text: 'arrows from penguins', masks: [
        { points:[[60.59,25.75],[62.68,27.63],[63.32,26.75],[69.59,26.75],[69.68,25.37],[63.32,25.25],[63.41,24]], bbox:{x:60.59,y:24,w:9.09,h:3.63} },
        { points:[[58.59,15.63],[59.32,19],[60.23,17.88],[68.95,23.88],[69.5,22.25],[61.14,16.63],[61.5,15.75]], bbox:{x:58.59,y:15.63,w:10.91,h:8.25} }
      ] },
      { text: 'smaller toothed whales', masks: [
        { points:[[30.5,14],[33.95,10.13],[39.59,7.12],[39.77,1.75],[41.5,1.75],[42.77,6.25],[49.68,5.25],[50.95,6.13],[54.05,5.63],[53.14,7.25],[53.86,9.13],[54.32,10.75],[53.77,11.75],[51.32,9.63],[51.14,8.63],[45.95,11.63],[44.32,12.88],[62.77,12.5],[62.77,15.63],[55.5,15.75],[55.59,19.5],[46.41,19.5],[46.5,15.88],[42.59,15.75],[42.05,14.37],[39.41,15.5],[39.23,17.38],[36.68,17.88],[35.41,16.25],[32.23,16.88]], bbox:{x:30.5,y:1.75,w:32.27,h:17.75} }
      ] },
      { text: 'leopard seal', masks: [
        { points:[[38.23,26.88],[41.86,25.75],[42.59,24.5],[43.5,25.5],[46.95,23.13],[48.41,23.13],[51.95,21.88],[56.14,23.25],[58.05,22.38],[59.59,24.25],[61.32,23.63],[60.95,25],[60.77,27],[59.68,27.5],[60.5,28.63],[60.86,29.88],[59.5,31],[58.14,30.63],[57.68,31.25],[60.86,31.87],[60.95,34.63],[44.95,34.88],[44.5,32.38],[44.77,30.63],[45.59,31.5],[53.23,31.75],[52.14,30.75],[48.05,30.63],[48.05,30.63]], bbox:{x:38.23,y:21.88,w:23.09,h:13} }
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

  /* ═══════════════════════ 2. OLYMPICS ═══════════════════════ */
  {
    id: 'olympics',
    label: 'Olympics',
    image: 'static/images/qual/originals/qual_res_4_olympics.png',
    question: 'What is the travel time by rail line from Beijing to Zhangjiakou?',

    spans: [
      // Annotator drew 4 groups; masks distributed back into 7 per-concept spans to match step spanIndexes
      { text: 'Beijing',     masks: [ { points:[[70.73,56.13],[76.36,56.13],[76.36,60.67],[70.73,60.67]], bbox:{x:70.73,y:56.13,w:5.63,h:4.54} } ] },                                                                                                                                    // city pin — east/right
      { text: 'Zhangjiakou', masks: [ { points:[[17.64,53.95],[27.36,53.95],[27.36,58.3],[17.64,58.3]], bbox:{x:17.64,y:53.95,w:9.72,h:4.35} } ] },                                                                                                                                      // city pin — west/left
      { text: 'Yanqing',     masks: [ { points:[[47.64,50.79],[54.36,50.79],[54.36,55.14],[47.64,55.14]], bbox:{x:47.64,y:50.79,w:6.72,h:4.35} } ] },                                                                                                                                    // city pin — middle
      { text: 'dashed line', masks: [ { points:[[53.55,75.3],[57.27,77.27],[60.91,79.25],[63.55,80.83],[66.55,80.83],[66.73,82.21],[63.64,82.61],[60.91,81.23],[58,79.84],[54.36,78.06],[52.73,77.08]], bbox:{x:52.73,y:75.3,w:14,h:7.31} } ] },                                         // Beijing→Yanqing rail arc
      { text: '20 mins',     masks: [ { points:[[62.36,77.67],[66.36,77.67],[66.36,81.03],[62.36,81.03]], bbox:{x:62.36,y:77.67,w:4,h:3.36} } ] },                                                                                                                                       // travel-time label
      { text: 'dashed line', masks: [ { points:[[25.73,81.03],[29.73,82.41],[36.09,83.99],[40.64,82.81],[44.82,79.45],[48.73,76.28],[48,74.7],[46.82,75.49],[41.45,79.84],[38.73,81.42],[34.36,81.42],[26.64,79.25],[25.82,79.05]], bbox:{x:25.73,y:74.7,w:23,h:9.29} } ] },             // Yanqing→Zhangjiakou rail arc
      { text: '40 mins',     masks: [ { points:[[36.91,77.87],[41.18,77.87],[41.18,81.82],[36.91,81.82]], bbox:{x:36.91,y:77.87,w:4.27,h:3.95} } ] },                                                                                                                                    // travel-time label
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

  /* ═══════════════════════ 3. TRIANGLE ═══════════════════════ */
  {
    id: 'triangle',
    label: 'Triangle',
    image: 'static/images/qual/originals/qual_res_3_triangle.png',
    question: 'Find the value of x?',

    spans: [
      // Annotator drew 4 groups; masks distributed back into 7 per-concept spans to match step spanIndexes
      { text: 'right angled triangle', masks: [ { points:[[17.91,67.55],[23.09,67.55],[23.09,76.65],[17.91,76.65]], bbox:{x:17.91,y:67.55,w:5.18,h:9.1} } ] },      // right-angle corner marker
      { text: 'Height',     masks: [ { points:[[17.73,9.4],[19.64,9.4],[19.64,77.24],[17.73,77.24]], bbox:{x:17.73,y:9.4,w:1.91,h:67.84} } ] },                     // vertical leg
      { text: '3 cm',       masks: [ { points:[[6,37.44],[17,37.44],[17,47.43],[6,47.43]], bbox:{x:6,y:37.44,w:11,h:9.99} } ] },                                    // height label
      { text: 'Width',      masks: [ { points:[[17.55,73.57],[89.55,73.57],[89.55,77.09],[17.55,77.09]], bbox:{x:17.55,y:73.57,w:72,h:3.52} } ] },                  // horizontal leg
      { text: '4 cm',       masks: [ { points:[[42.18,79],[53.55,79],[53.55,88.25],[42.18,88.25]], bbox:{x:42.18,y:79,w:11.37,h:9.25} } ] },                        // width label
      { text: 'Hypotenuse', masks: [ { points:[[19,8.81],[17.36,12.19],[89.55,77.68],[90.64,74.16]], bbox:{x:17.36,y:8.81,w:73.28,h:68.87} } ] },                   // diagonal
      { text: 'x cm',       masks: [ { points:[[51.18,30.84],[64.18,30.84],[64.18,38.47],[51.18,38.47]], bbox:{x:51.18,y:30.84,w:13,h:7.63} } ] },                  // x label
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

  /* ═════════════════════ 4. MEDICAL BILL ═════════════════════ */
  {
    id: 'medicalbill',
    label: 'Medical Bill',
    image: 'static/images/qual/originals/qual_res_5_medicalbill.png',
    question: 'How much should I pay for Blood Test?',

    spans: [
      // Annotator drew 5 groups; masks distributed back into 7 per-concept spans to match step spanIndexes
      { text: 'Cost',        masks: [ { points:[[53.41,19.42],[63.86,19.42],[63.86,23.22],[53.41,23.22]], bbox:{x:53.41,y:19.42,w:10.45,h:3.8} } ] },    // column header
      { text: 'Blood Test',  masks: [ { points:[[22.05,29.81],[35.68,29.81],[35.68,33.33],[22.05,33.33]], bbox:{x:22.05,y:29.81,w:13.63,h:3.52} } ] },   // row label
      { text: '$50',         masks: [ { points:[[53.41,29.54],[57.59,29.54],[57.59,33.15],[53.41,33.15]], bbox:{x:53.41,y:29.54,w:4.18,h:3.61} } ] },    // cost cell
      { text: '5% discount', masks: [ { points:[[27.59,42.64],[41.41,42.64],[41.41,46.52],[27.59,46.52]], bbox:{x:27.59,y:42.64,w:13.82,h:3.88} } ] },  // footnote
      { text: 'premium',     masks: [ { points:[[80.95,11.56],[91.14,11.56],[91.14,15.18],[80.95,15.18]], bbox:{x:80.95,y:11.56,w:10.19,h:3.62} } ] },  // plan badge
      { text: 'Claim',       masks: [ { points:[[76.59,19.06],[87.77,19.06],[87.77,23.4],[76.59,23.4]], bbox:{x:76.59,y:19.06,w:11.18,h:4.34} } ] },    // column header
      { text: '$20',         masks: [ { points:[[76.32,29.36],[80.14,29.36],[80.14,32.88],[76.32,32.88]], bbox:{x:76.32,y:29.36,w:3.82,h:3.52} } ] },   // claim cell
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

  /* ════════════════════ 5. FLOOR PLAN ════════════════════ */
  {
    id: 'floorplan',
    label: 'Floor Plan',
    image: 'static/images/qual/originals/qual_res_1_floorplan.png',
    question: 'How many bedrooms are present in this floor plan?',

    spans: [
      { text: 'Bedroom 1', masks: [ { points:[[5.68,14.04],[5.32,13.52],[5.32,13.17],[5.41,12.39],[6.32,12.13],[14.77,12.31],[14.95,13.43],[14.68,14.3],[13.86,14.82],[6.68,14.73]], bbox:{x:5.32,y:12.13,w:9.63,h:2.69} } ] },
      { text: 'Bedroom 2', masks: [ { points:[[72.86,8.32],[72.23,7.54],[72.14,6.33],[73.05,5.72],[81.77,5.72],[81.86,6.5],[81.95,7.89],[81.14,8.58]], bbox:{x:72.14,y:5.72,w:9.81,h:2.86} } ] },
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

  /* ═══════════════════ 6. CREDIT CARD ═══════════════════ */
  {
    id: 'creditcard',
    label: 'Credit Card',
    image: 'static/images/qual/originals/qual_res_2_creditcard.png',
    question: 'Does the Net Sales total equal the sum of the Net Sales values?',

    spans: [
      // Annotator drew 3 groups (header / 6 row values / total); distributed back per-row to match step spanIndexes
      { text: 'Net Sales',  masks: [ { points:[[81.55,30.91],[88.09,30.91],[88.09,35.52],[81.55,35.52]], bbox:{x:81.55,y:30.91,w:6.54,h:4.61} } ] },   // column header
      { text: '$20.00',     masks: [ { points:[[82.91,37.48],[88.18,37.48],[88.18,41.74],[82.91,41.74]], bbox:{x:82.91,y:37.48,w:5.27,h:4.26} } ] },    // Mastercard row
      { text: '$20.00',     masks: [ { points:[[82.91,43.69],[88.09,43.69],[88.09,47.78],[82.91,47.78]], bbox:{x:82.91,y:43.69,w:5.18,h:4.09} } ] },    // Visa row
      { text: '$20.00',     masks: [ { points:[[82.82,49.2],[88.18,49.2],[88.18,53.64],[82.82,53.64]], bbox:{x:82.82,y:49.2,w:5.36,h:4.44} } ] },       // Discover row
      { text: '$50.00',     masks: [ { points:[[82.82,55.06],[88.18,55.06],[88.18,59.5],[82.82,59.5]], bbox:{x:82.82,y:55.06,w:5.36,h:4.44} } ] },      // American Express row
      { text: '$30.00',     masks: [ { points:[[82.82,60.57],[88.09,60.57],[88.09,65.01],[82.82,65.01]], bbox:{x:82.82,y:60.57,w:5.27,h:4.44} } ] },    // JCB row
      { text: '$20.00',     masks: [ { points:[[82.73,66.61],[88.09,66.61],[88.09,71.4],[82.73,71.4]], bbox:{x:82.73,y:66.61,w:5.36,h:4.79} } ] },      // Debit row
      { text: '$150.00',    masks: [ { points:[[82.18,72.47],[88.09,72.47],[88.09,76.91],[82.18,76.91]], bbox:{x:82.18,y:72.47,w:5.91,h:4.44} } ] },    // Totals row
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

];
