// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Head from "next/head";
import * as Link from "next/link";
import * as $$Error from "next/error";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Config from "next/config";
import * as Js_undefined from "bs-platform/lib/es6/js_undefined.js";

function make(href, _as, prefetch, replace, shallow, passHref, children) {
  return ReasonReact.wrapJsForReason(Link.default, {
              href: Js_undefined.fromOption(href),
              as: Js_undefined.fromOption(_as),
              prefetch: Js_undefined.fromOption(prefetch),
              replace: Js_undefined.fromOption(replace),
              shallow: Js_undefined.fromOption(shallow),
              passHref: Js_undefined.fromOption(passHref)
            }, children);
}

var Link$1 = /* module */[/* make */make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Head.default, { }, children);
}

var Head$1 = /* module */[/* make */make$1];

function make$2(statusCode, children) {
  return ReasonReact.wrapJsForReason($$Error.default, {
              statusCode: statusCode
            }, children);
}

var $$Error$1 = /* module */[/* make */make$2];

function getConfig(prim) {
  return Config.default();
}

var Config$1 = /* module */[/* getConfig */getConfig];

export {
  Link$1 as Link,
  Head$1 as Head,
  $$Error$1 as $$Error,
  Config$1 as Config,
  
}
/* next/head Not a pure module */
