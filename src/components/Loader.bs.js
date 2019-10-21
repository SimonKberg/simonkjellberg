// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";

var bounce = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.transform(Css.scale(0.0, 0.0)),
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          40,
          /* :: */[
            Css.transform(Css.scale(1.0, 1.0)),
            /* [] */0
          ]
        ],
        /* :: */[
          /* tuple */[
            80,
            /* :: */[
              Css.transform(Css.scale(0.0, 0.0)),
              /* [] */0
            ]
          ],
          /* :: */[
            /* tuple */[
              100,
              /* :: */[
                Css.transform(Css.scale(0.0, 0.0)),
                /* [] */0
              ]
            ],
            /* [] */0
          ]
        ]
      ]
    ]);

var container = Css.style(/* :: */[
      Css.position(/* relative */903134412),
      /* :: */[
        Css.display(/* block */888960333),
        /* :: */[
          Css.marginBottom(Css.rem(1.0)),
          /* :: */[
            Css.textAlign(/* left */-944764921),
            /* [] */0
          ]
        ]
      ]
    ]);

var point = Css.style(/* :: */[
      Css.display(/* inlineBlock */-147785676),
      /* :: */[
        Css.width(Css.ch(1.0)),
        /* :: */[
          Css.height(Css.ch(1.0)),
          /* :: */[
            Css.marginRight(Css.ch(0.75)),
            /* :: */[
              Css.borderRadius(Css.pct(100.0)),
              /* :: */[
                Css.backgroundColor(/* currentColor */292050538),
                /* :: */[
                  Css.unsafe("willChange", "transform"),
                  /* :: */[
                    Css.animation(1400, undefined, undefined, /* easeInOut */-960651557, /* both */-1055160191, undefined, /* infinite */-630647084, bounce),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var point1 = Css.merge(/* :: */[
      point,
      /* :: */[
        Css.style(/* :: */[
              Css.animationDelay(-320),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var point2 = Css.merge(/* :: */[
      point,
      /* :: */[
        Css.style(/* :: */[
              Css.animationDelay(-160),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var point3 = Css.merge(/* :: */[
      point,
      /* :: */[
        Css.style(/* :: */[
              Css.animationDelay(0),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = {
  bounce: bounce,
  container: container,
  point: point,
  point1: point1,
  point2: point2,
  point3: point3
};

function Loader(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement("span", {
                  className: point1
                }), React.createElement("span", {
                  className: point2
                }), React.createElement("span", {
                  className: point3
                }));
}

var make = Loader;

var $$default = Loader;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* bounce Not a pure module */
