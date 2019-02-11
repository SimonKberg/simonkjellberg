// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

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
                  Css.unsafe("will-change", "transform"),
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

var Styles = /* module */[
  /* bounce */bounce,
  /* container */container,
  /* point */point,
  /* point1 */point1,
  /* point2 */point2,
  /* point3 */point3
];

var component = ReasonReact.statelessComponent("Loader");

function make(param) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", {
                          className: container
                        }, React.createElement("span", {
                              className: point1
                            }), React.createElement("span", {
                              className: point2
                            }), React.createElement("span", {
                              className: point3
                            }));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, make);

export {
  Styles ,
  component ,
  make ,
  $$default ,
  $$default as default,
  
}
/* bounce Not a pure module */
