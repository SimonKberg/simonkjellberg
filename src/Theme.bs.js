// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as Utils$SimonKjellberg from "./Utils.bs.js";

var colors_black = Css.hex("000");

var colors_white = Css.hex("fff");

var colors_silver = Css.hex("c0c0c0");

var colors_whitesmoke = Css.hex("f5f5f5");

var colors_firebrick = Css.hex("b22222");

var colors = {
  black: colors_black,
  white: colors_white,
  silver: colors_silver,
  whitesmoke: colors_whitesmoke,
  firebrick: colors_firebrick
};

var primary = colors_black;

var secondary = colors_white;

var muted = colors_silver;

var Color = {
  primary: primary,
  secondary: secondary,
  muted: muted
};

var primary$1 = colors_white;

var secondary$1 = colors_black;

var Background = {
  primary: primary$1,
  secondary: secondary$1
};

var maxWidth = Css.rem(35.0);

var Page = {
  maxWidth: maxWidth
};

var color = colors_white;

var backgroundColor = colors_black;

var Header = {
  color: color,
  backgroundColor: backgroundColor
};

var width = Css.rem(0.2);

var color$1 = colors_silver;

var radius = Css.rem(0.1);

var Thumb = {
  color: color$1,
  radius: radius
};

var Track = {
  color: Css.transparent
};

var Scrollbar = {
  width: width,
  Thumb: Thumb,
  Track: Track
};

var backgroundColor$1 = Css.hex("0d1f2d");

var $$Window = {
  backgroundColor: backgroundColor$1
};

var backgroundColor$2 = Css.hex("e0e8f0");

var height = Css.rem(1.875);

var Topbar = {
  backgroundColor: backgroundColor$2,
  height: height
};

var backgroundColor$3 = Css.hex("ff6057");

var Close = {
  backgroundColor: backgroundColor$3
};

var backgroundColor$4 = Css.hex("ffbd2e");

var Minimize = {
  backgroundColor: backgroundColor$4
};

var backgroundColor$5 = Css.hex("27c93f");

var Maximize = {
  backgroundColor: backgroundColor$5
};

var Controls = {
  Close: Close,
  Minimize: Minimize,
  Maximize: Maximize
};

var color$2 = Css.hex("f4faff");

var maxHeight = Css.rem(25.0);

var Content = {
  color: color$2,
  maxHeight: maxHeight
};

var Terminal = {
  $$Window: $$Window,
  Topbar: Topbar,
  Controls: Controls,
  Content: Content
};

var inline = colors_firebrick;

var block = colors_black;

var Color$1 = {
  inline: inline,
  block: block
};

var backgroundColor$6 = colors_whitesmoke;

var borderColor = colors_silver;

var Code = {
  Color: Color$1,
  backgroundColor: backgroundColor$6,
  borderColor: borderColor
};

var borderColor$1 = colors_whitesmoke;

var Quote = {
  borderColor: borderColor$1
};

var theme = {
  color: {
    primary: Utils$SimonKjellberg.string_of_color(primary),
    secondary: Utils$SimonKjellberg.string_of_color(secondary),
    muted: Utils$SimonKjellberg.string_of_color(muted)
  },
  background: {
    primary: Utils$SimonKjellberg.string_of_color(primary$1),
    secondary: Utils$SimonKjellberg.string_of_color(secondary$1)
  },
  page: {
    maxWidth: Utils$SimonKjellberg.string_of_dimension(maxWidth)
  },
  scrollbar: {
    width: Utils$SimonKjellberg.string_of_dimension(width),
    thumb: {
      color: Utils$SimonKjellberg.string_of_color(color$1),
      radius: Utils$SimonKjellberg.string_of_dimension(radius)
    },
    track: {
      color: Utils$SimonKjellberg.string_of_color(Css.transparent)
    }
  },
  terminal: {
    window: {
      backgroundColor: Utils$SimonKjellberg.string_of_color(backgroundColor$1)
    },
    topbar: {
      backgroundColor: Utils$SimonKjellberg.string_of_color(backgroundColor$2),
      height: Utils$SimonKjellberg.string_of_dimension(height)
    },
    controls: {
      close: {
        backgroundColor: Utils$SimonKjellberg.string_of_color(backgroundColor$3)
      },
      minimize: {
        backgroundColor: Utils$SimonKjellberg.string_of_color(backgroundColor$4)
      },
      maximize: {
        backgroundColor: Utils$SimonKjellberg.string_of_color(backgroundColor$5)
      }
    },
    content: {
      color: Utils$SimonKjellberg.string_of_color(color$2),
      maxHeight: Utils$SimonKjellberg.string_of_dimension(maxHeight)
    }
  },
  code: {
    color: {
      inline: Utils$SimonKjellberg.string_of_color(inline),
      block: Utils$SimonKjellberg.string_of_color(block)
    },
    background: Utils$SimonKjellberg.string_of_color(backgroundColor$6),
    border: Utils$SimonKjellberg.string_of_color(borderColor)
  },
  quote: {
    border: Utils$SimonKjellberg.string_of_color(borderColor$1)
  }
};

var $$default = theme;

export {
  colors ,
  Color ,
  Background ,
  Page ,
  Header ,
  Scrollbar ,
  Terminal ,
  Code ,
  Quote ,
  theme ,
  $$default ,
  $$default as default,
  
}
/* colors Not a pure module */
