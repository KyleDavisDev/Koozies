import { container, description, main, mainRaised, mlAuto, mrAuto, title, whiteColor } from "../../../../theme/theme";

const SectionHeroStyles = {
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  description,
  textCenter: {
    textAlign: "center !important" as "center"
  },
  container: {
    ...container,
    zIndex: 2
  },
  brand: {
    "& h1, & h4": {
      color: whiteColor
    }
  }
};

export default SectionHeroStyles;