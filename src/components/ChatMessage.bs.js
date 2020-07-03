// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Theme$SimonKjellberg from "../Theme.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";

var user = Curry._1(Css.style, {
      hd: Css.fontWeight(/* bold */-1055161979),
      tl: /* [] */0
    });

var message = Curry._1(Css.style, {
      hd: Css.display(/* inline */423610969),
      tl: {
        hd: Css.selector("code", {
              hd: Css.padding2(Css.em(0.1), Css.em(0.2)),
              tl: {
                hd: Css.fontSize(Css.em(0.8)),
                tl: {
                  hd: Css.color(Theme$SimonKjellberg.Code.Color.inline),
                  tl: {
                    hd: Css.backgroundColor(Theme$SimonKjellberg.Code.backgroundColor),
                    tl: {
                      hd: Css.border(Css.px(1), /* solid */12956715, Theme$SimonKjellberg.Code.borderColor),
                      tl: {
                        hd: Css.borderRadius(Css.em(0.2)),
                        tl: {
                          hd: Css.verticalAlign(/* textBottom */476669816),
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            }),
        tl: {
          hd: Css.selector("pre", {
                hd: Css.padding(Css.em(0.5)),
                tl: {
                  hd: Css.margin2(Css.em(0.5), /* zero */-789508312),
                  tl: {
                    hd: Css.backgroundColor(Theme$SimonKjellberg.Code.backgroundColor),
                    tl: {
                      hd: Css.border(Css.px(1), /* solid */12956715, Theme$SimonKjellberg.Code.borderColor),
                      tl: {
                        hd: Css.borderRadius(Css.em(0.2)),
                        tl: {
                          hd: Css.lineHeight(Css.em(1.0)),
                          tl: {
                            hd: Css.selector("> code", {
                                  hd: Css.color(Theme$SimonKjellberg.Code.Color.block),
                                  tl: {
                                    hd: Css.padding(/* zero */-789508312),
                                    tl: {
                                      hd: Css.borderWidth(/* zero */-789508312),
                                      tl: /* [] */0
                                    }
                                  }
                                }),
                            tl: /* [] */0
                          }
                        }
                      }
                    }
                  }
                }
              }),
          tl: {
            hd: Css.selector("blockquote", {
                  hd: Css.margin(/* zero */-789508312),
                  tl: {
                    hd: Css.paddingLeft(Css.ch(1.0)),
                    tl: {
                      hd: Css.borderLeft(Css.ch(0.5), /* solid */12956715, Theme$SimonKjellberg.Quote.borderColor),
                      tl: /* [] */0
                    }
                  }
                }),
            tl: {
              hd: Css.selector("a", {
                    hd: Css.color(Theme$SimonKjellberg.Color.muted),
                    tl: {
                      hd: Css.textDecoration(/* underline */131142924),
                      tl: {
                        hd: Css.hover({
                              hd: Css.textDecoration(/* none */-922086728),
                              tl: /* [] */0
                            }),
                        tl: /* [] */0
                      }
                    }
                  }),
              tl: /* [] */0
            }
          }
        }
      }
    });

var editedLabel = Curry._1(Css.style, {
      hd: Css.color(Theme$SimonKjellberg.Color.muted),
      tl: /* [] */0
    });

var Styles = {
  user: user,
  message: message,
  editedLabel: editedLabel
};

function ChatMessage(Props) {
  var user$1 = Props.user;
  var text = Props.text;
  var editedOpt = Props.edited;
  var edited = editedOpt !== undefined ? editedOpt : false;
  return React.createElement(React.Fragment, undefined, React.createElement("span", {
                  className: user,
                  style: {
                    color: "#" + user$1.color
                  }
                }, Utils$SimonKjellberg.str(user$1.name + ": ")), React.createElement("div", {
                  className: message,
                  dangerouslySetInnerHTML: {
                    __html: text
                  }
                }), edited ? React.createElement("small", {
                    className: editedLabel
                  }, Utils$SimonKjellberg.str(" (edited) ")) : null);
}

var make = ChatMessage;

var $$default = ChatMessage;

export {
  Styles ,
  make ,
  $$default ,
  $$default as default,
  
}
/* user Not a pure module */
