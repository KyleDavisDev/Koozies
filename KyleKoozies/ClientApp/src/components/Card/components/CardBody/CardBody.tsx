import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import CardBodyStyles from "./CardBodyStyles";

const useStyles = makeStyles(CardBodyStyles);

export interface ICardBody {
  className?: string;
  background?: boolean;
  plain?: boolean;
  formHorizontal?: boolean;
  pricing?: boolean;
  signup?: boolean;
  color?: boolean;
  children?: Element | JSX.Element | Array<Element | JSX.Element>;
}

const CardBody: React.FC<ICardBody> = props => {
  const { className = "", children, background, plain, formHorizontal, pricing, signup, color, ...rest } = props;

  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });

  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
