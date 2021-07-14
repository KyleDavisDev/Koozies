import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import CardFooterStyles from "./CardFooterStyles";

const useStyles = makeStyles(CardFooterStyles);

export interface ICardFooter {
  className?: string,
  plain?: boolean,
  profile?: boolean,
  pricing?: boolean,
  testimonial?: boolean,
  children: Element | JSX.Element | Array<Element | JSX.Element>,
}

const CardFooter: React.FC<ICardFooter> = (props) => {
  const {
    className = "",
    children,
    plain = true,
    profile = false,
    pricing = false,
    testimonial = false,
    ...rest
  } = props;
  
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardFooter;