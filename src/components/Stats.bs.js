// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Link$SimonKjellberg from "./Link.bs.js";
import * as Utils$SimonKjellberg from "../Utils.bs.js";
import * as Heading$SimonKjellberg from "./Heading.bs.js";
import * as Subtitle$SimonKjellberg from "./Subtitle.bs.js";
import * as StatsList$SimonKjellberg from "./StatsList.bs.js";

function Stats(Props) {
  return React.createElement("section", undefined, React.createElement(Heading$SimonKjellberg.make, {
                  level: /* Level2 */-656133554,
                  children: null
                }, Utils$SimonKjellberg.str("Currently writing "), React.createElement(Subtitle$SimonKjellberg.make, {
                      children: null
                    }, Utils$SimonKjellberg.str("(Via "), React.createElement(Link$SimonKjellberg.make, {
                          href: "https://wakatime.com/@simonkberg",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: Utils$SimonKjellberg.str("WakaTime")
                        }), Utils$SimonKjellberg.str(")"))), React.createElement(StatsList$SimonKjellberg.make, { }));
}

var make = Stats;

var $$default = Stats;

export {
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
