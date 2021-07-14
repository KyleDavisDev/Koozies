import {
  section,
  container,
  cardTitle,
  coloredShadow,
  grayColor,
  dangerColor,
  mlAuto,
} from "../../../../theme/theme";

import tooltipsStyle from "../../../../components/ToolTip/ToolTipStyles";

const SectionLatestKooziesStyles = {
  cardTitle,
  container,
  ...tooltipsStyle,
  section: {
    ...section,
    padding: "70px 0px",
  },
  coloredShadow,
  cardDescription: {
    color: grayColor[0],
    textAlign: "center" as "center",
  },
  mlAuto,
  priceContainer: {
    display: "inline-flex",
  },
  price: {
    fontSize: "18px",
    color: grayColor[22],
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through",
  },
  priceNew: {
    color: dangerColor[0],
  },
  stats: {
    color: grayColor[0],
  },
  textCenter: {
    textAlign: "center" as "center",
  },
};

export default SectionLatestKooziesStyles;
