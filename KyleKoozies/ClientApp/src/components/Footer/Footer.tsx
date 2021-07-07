import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import FooterStyles from "./FooterStyles";

const useStyles = makeStyles(FooterStyles);

export interface IFooter {
  theme?: "dark" | "white" | "transparent";
  big?: boolean;
  content: Element | JSX.Element | Array<Element | JSX.Element>;
  children: Element | JSX.Element | Array<Element | JSX.Element>;
  className?: string;
}

const Footer: React.FC<IFooter> = props => {
  const { children, content, theme = "dark", big = true, className = "" } = props;

  const classes = useStyles();
  const themeType = (theme && theme !== "transparent");
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
};

export default Footer;
