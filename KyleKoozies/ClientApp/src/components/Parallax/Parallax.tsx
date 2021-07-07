import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import ParallaxStyles from "./ParallaxStyles";
const useStyles = makeStyles(ParallaxStyles);

export interface IParallax {
  className?: string;
  filter:
    | "primary"
    | "rose"
    | "dark"
    | "info"
    | "success"
    | "warning"
    | "danger";
  children: Element | JSX.Element | Array<Element | JSX.Element>;
  style?: object;
  image: string;
  small: boolean;
}

const Parallax: React.FC<IParallax> = (props) => {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const { filter, className = "", children, style, image, small } = props;
  
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;