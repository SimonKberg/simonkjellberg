// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
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
                    Css.color(Theme$SimonKjellberg.Color.muted),
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

var make = Utils$SimonKjellberg.forwardDOMRef((function (Props, domRef) {
        var className = Props.className;
        var style = Props.style;
        var children = Props.children;
        var tmp = {
          className: Utils$SimonKjellberg.cn(/* :: */[
                styles,
                /* :: */[
                  Utils$SimonKjellberg.$pipe$question(className, ""),
                  /* [] */0
                ]
              ])
        };
        if (domRef !== undefined) {
          tmp.ref = Caml_option.valFromOption(domRef);
        }
        if (style !== undefined) {
          tmp.style = Caml_option.valFromOption(style);
        }
        return React.createElement("li", tmp, children);
      }));

var $$default = make;

export {
  styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
