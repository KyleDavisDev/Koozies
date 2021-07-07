import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import CardStyles from "./CardStyles";

const useStyles = makeStyles(CardStyles);

export interface ICard {
  className: string;
  plain?: boolean;
  profile?: boolean;
  raised?: boolean;
  background?: boolean;
  pricing?: boolean;
  color: "primary" | "info" | "success" | "warning" | "danger" | "rose";
  product?: boolean;
  children: Element | JSX.Element | Array<Element | JSX.Element>;
}

const Card: React.FC<ICard> = (props) => {
  const {
    className,
    children,
    plain,
    profile,
    raised,
    background,
    pricing,
    color,
    product,
    ...rest
  } = props;
  
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export default Card;