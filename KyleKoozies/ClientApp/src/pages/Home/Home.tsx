import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import GridContainer from "../../components/GridContainer/GridContainer";
import GridItem from "../../components/GridItem/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import Footer from "../../components/Footer/Footer";

import SectionHero from "./components/SectionHero/SectionHero"
import SectionLatestKoozies from "./components/SectionLatestKoozies/SectionLatestKoozies";
// import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";
// import SectionBlog from "views/EcommercePage/Sections/SectionBlog.js";

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
      
      <SectionHero />      
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestKoozies />
        {/*<SectionProducts />*/}
      </div>
      {/*<SectionBlog />*/}

      <Footer theme="dark" />
        
      
    </div>
  );
};

export default Home;
