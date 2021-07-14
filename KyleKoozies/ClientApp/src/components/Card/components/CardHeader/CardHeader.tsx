import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import CardHeaderStyles from "./CardHeaderStyles";

const useStyles = makeStyles(CardHeaderStyles);

export interface ICardHeader {
  className?: string;
  color: "warning" | "success" | "danger" | "info" | "primary" | "rose";
  plain: boolean;
  image: boolean;
  contact: boolean;
  signup: boolean;
  noShadow: boolean;
  children: Element | JSX.Element | Array<Element | JSX.Element>;
}

const CardHeader: React.FC<ICardHeader> = props => {
  const {
    className = "",
    children,
    color = "info",
    plain = true,
    image = false,
    contact = false,
    signup = false,
    noShadow = true,
    ...rest
  } = props;

  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });

  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardHeader;
