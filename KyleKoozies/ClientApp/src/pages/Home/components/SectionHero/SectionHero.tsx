import * as React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

import Parallax from "../../../../components/Parallax/Parallax";
import GridItem from "../../../../components/GridItem/GridItem";
import GridContainer from "../../../../components/GridContainer/GridContainer";

import SectionHeroStyles from "./SectionHeroStyles";

const useStyles = makeStyles(SectionHeroStyles);

export interface ISectionHero {}

const SectionHero: React.FC<ISectionHero> = props => {
  const classes = useStyles();

  return (
    <Parallax image={require("../../../../../public/images/bg7.jpg").default} filter="dark" small>
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
  );
};

export default SectionHero;
