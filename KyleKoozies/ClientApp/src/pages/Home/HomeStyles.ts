import {
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container,
  description,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "../../theme/theme";


const HomeStyles = {
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  description,
  textCenter: {
    textAlign: "center !important" as "center",
  },
  container: {
    ...container,
    zIndex: 2,
  },
  brand: {
    "& h1, & h4": {
      color: whiteColor,
    },
  },
  card: {},
  subscribeButton: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0",
    },
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10,
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px",
    },
    "& form": { margin: "0px" },
    "&$subscribeLineImage:after": {
      position: "absolute" as "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ",0.66)",
    },
  },
  subscribeLineImage: {
    position: "relative" as "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative" as "relative",
    },
    "& $title": {
      color: whiteColor,
    },
    "& $description": {
      color: grayColor[0],
    },
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
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  left: {
    float: "left!important" as "left",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right" as "right",
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent",
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
};

export default HomeStyles;
