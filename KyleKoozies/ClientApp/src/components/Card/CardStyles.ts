import {
  blackColor,
  whiteColor,
  roseColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,
  infoColor,
  hexToRgb
} from "../../theme/theme";

const CardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(blackColor) +
      ", 0.12)",
    position: "relative" as "relative",
    display: "flex",
    flexDirection: "column" as "column",
    minWidth: "0",
    wordWrap: "break-word" as "break-word",
    fontSize: ".875rem",
    
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardProduct: {
    marginTop: "30px",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardRaised: {
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center" as "center",
    color: whiteColor,
    "& h3": {
      color: whiteColor + " !important"
    },
    "& p": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.7)!important"
    },
    "&:after": {
      position: "absolute" as "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.56)",
      borderRadius: "6px",
    },
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important"
    }
  },
  primary: {
    background:
      "linear-gradient(60deg," + primaryColor[1] + ", " + primaryColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  },
  info: {
    background:
      "linear-gradient(60deg," + infoColor[1] + "," + infoColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  },
  success: {
    background:
      "linear-gradient(60deg," + successColor[1] + "," + successColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  },
  warning: {
    background:
      "linear-gradient(60deg," + warningColor[1] + "," + warningColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  },
  danger: {
    background:
      "linear-gradient(60deg," + dangerColor[1] + "," + dangerColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  },
  rose: {
    background:
      "linear-gradient(60deg," + roseColor[1] + "," + roseColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    color: whiteColor
  }
};

export default CardStyle;
