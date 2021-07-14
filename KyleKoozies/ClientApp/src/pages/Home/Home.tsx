﻿import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import GridContainer from "../../components/GridContainer/GridContainer";
import GridItem from "../../components/GridItem/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import Footer from "../../components/Footer/Footer";

import SectionLatestOffers from "views/EcommercePage/Sections/SectionLatestOffers.js";
import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";
import SectionBlog from "views/EcommercePage/Sections/SectionBlog.js";

import HomeStyles from "./HomeStyles";

const useStyles = makeStyles(HomeStyles);

export interface IHome {}

const Home: React.FC<IHome> = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Koozies"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/examples/clark-street-merc.jpg").default} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Fantastic Koozies!</h1>
                <h4>
                  Kyle's <b>amazing</b> collection of koozies
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
        <SectionProducts />
      </div>
      <SectionBlog />

      <Footer theme="dark" />
        
      
    </div>
  );
};

export default Home;
