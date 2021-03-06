import {
  container,
  primaryColor,
  whiteColor,
  btnLink,
  grayColor,
  twitterColor,
  dribbbleColor,
  instagramColor,
  hexToRgb, blackColor
} from "../../theme/theme";

const FooterStyles = {
  left: {
    float: "left !important" as "left",
    display: "block" as "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right" as "right"
  },
  rightLinks: {
    float: "right !important" as "right",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center" as "center",
    display: "flex",
    zIndex: 2,
    position: "relative" as "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: grayColor[0]
    }
  },
  content: {
    textAlign: "left" as "left"
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)",
    backgroundSize: "550% 450%",
    color: whiteColor,
    "& p": {
      color: grayColor[0]
    },
    "& i": {
      color: whiteColor
    },
    "& a": {
      color: whiteColor,
      opacity: ".86",
      "&:visited": {
        color: whiteColor
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + hexToRgb(whiteColor) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: whiteColor
    }
  },
  white: {
    backgroundColor: whiteColor,
    color: grayColor[1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: grayColor[1]
      },
      "&:hover, &:focus": {
        color: grayColor[20]
      }
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative" as "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative" as "relative"
  },
  btnTwitter: {
    ...btnLink,
    color: twitterColor
  },
  btnDribbble: {
    ...btnLink,
    color: dribbbleColor
  },
  btnInstagram: {
    ...btnLink,
    color: instagramColor
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none" as "none"
  },
  clearFix: {
    clear: "both" as "both"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase" as "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative" as "relative",
    display: "block",
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300,
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px",
    },
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left" as "left",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(" +
      hexToRgb(blackColor) +
      ", 0.24), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
  }
};
export default FooterStyles;
