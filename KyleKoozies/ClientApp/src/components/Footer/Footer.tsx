import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";

import GridContainer from "../GridContainer/GridContainer";
import GridItem from "../GridItem/GridItem";

import FooterStyles from "./FooterStyles";

// import face1 from "assets/img/faces/card-profile6-square.jpg";
// import face2 from "assets/img/faces/christian.jpg";
// import face3 from "assets/img/faces/card-profile4-square.jpg";
// import face4 from "assets/img/faces/card-profile1-square.jpg";
// import face5 from "assets/img/faces/marc.jpg";
// import face6 from "assets/img/faces/kendall.jpg";
// import face7 from "assets/img/faces/card-profile5-square.jpg";
// import face8 from "assets/img/faces/card-profile2-square.jpg";

const useStyles = makeStyles(FooterStyles);

export interface IFooter {
  theme?: "dark" | "white" | "transparent";
  big?: boolean;
  className?: string;
}

const Footer: React.FC<IFooter> = props => {
  const { children, theme = "dark", big = true, className = "" } = props;

  const classes = useStyles();
  const themeType = theme && theme !== "transparent";
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          <div className={classes.content}>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <h5>About Us</h5>
                <p>
                  Creative Tim is a startup that creates design tools that make the web development process faster and
                  easier.{" "}
                </p>
                <p>
                  We love the web and care deeply for how users interact with a digital product. We power businesses and
                  individuals to create better looking web projects around the world.{" "}
                </p>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Social Feed</h5>
                <div className={classes.socialFeed}>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div>
                    <i className="fab fa-facebook-square" />
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Instagram Feed</h5>
                <div>
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                  <img
                    src={"#"}
                    className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
                    alt="..."
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <hr />
        </div>
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="https://koozies.kyledavisdev.com" target="_blank" className={classes.block}>
                  Home
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="https://kyledavisdev.com" target="_blank" className={classes.block}>
                  Dev
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="https://koozies.kyledavisdev.com/random" className={classes.block}>
                  Random Koozie
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="#" onClick={() => window.alert("JK. Please don't.")} className={classes.block}>
                  Contact us
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            Copyright &copy; {1900 + new Date().getFullYear()}{" "}
            <a href="https://kyledavisdev.com" target="_blank">
              Kyle Davis
            </a>{" "}
            All Rights Reserved.
          </div>
        </div>
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
};

export default Footer;
