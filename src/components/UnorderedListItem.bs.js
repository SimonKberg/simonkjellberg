// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";
import * as UnorderedList$SimonKjellberg from "./UnorderedList.bs.js";

var styles = Css.style(/* :: */[
      Css.position(/* relative */903134412),
      /* :: */[
        Css.before(/* :: */[
              Css.contentRule("*"),
              /* :: */[
                Css.position(/* absolute */-1013592457),
                /* :: */[
                  Css.left(Css.ch(-1.5)),
                  /* :: */[
                    Css.color(Theme$SimonKjellberg.Color[/* muted */2]),
                    /* [] */0
                  ]
                ]
              ]
            ]),
        /* :: */[
          Css.selector("& > ." + UnorderedList$SimonKjellberg.styles, /* :: */[
                Css.marginTop(Css.zero),
                /* :: */[
                  Css.marginBottom(Css.zero),
                  /* [] */0
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var component = ReasonReact.statelessComponent("UnorderedListItem");

function make(className, style, children) {
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
              var tmp = {
                className: Utils$SimonKjellberg.cn(/* :: */[
                      styles,
                      /* :: */[
                        Utils$SimonKjellberg.$pipe$unknown(className, ""),
                        /* [] */0
                      ]
                    ])
              };
              if (style !== undefined) {
                tmp.style = Caml_option.valFromOption(style);
              }
              return ReactDOMRe.createElementVariadic("li", Caml_option.some(tmp), children);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(Caml_option.nullable_to_opt(jsProps.className), Caml_option.nullable_to_opt(jsProps.style), jsProps.children);
      }));

export {
  styles ,
  component ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
