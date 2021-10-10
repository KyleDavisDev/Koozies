import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import classNames from "classnames";

import Favorite from "@material-ui/icons/Favorite";
import GridContainer from "../../../../components/GridContainer/GridContainer";
import GridItem from "../../../../components/GridItem/GridItem";
import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/components/CardHeader/CardHeader";
import CardBody from "../../../../components/Card/components/CardBody/CardBody";
import CardFooter from "../../../../components/Card/components/CardFooter/CardFooter";
import Button from "../../../../components/CustomButton/CustomButton";
// import gucci from "assets/img/examples/gucci.jpg";
// import tomFord from "assets/img/examples/tom-ford.jpg";
// import dolce from "assets/img/examples/dolce.jpg";
import SectionLatestKooziesStyles from "./SectionLatestKooziesStyles";
import { IKoozie } from "../../../../assets/Interfaces/IKoozie";

const useStyles = makeStyles(SectionLatestKooziesStyles);

export interface ISectionLatestKoozies {}

const SectionLatestKoozies: React.FC<ISectionLatestKoozies> = props => {
  const classes = useStyles();

  const [latest, setLatest] = React.useState<IKoozie[]>([]);

  React.useEffect(() => {
    const populateLatestKoozies = async () => {
      const response = await fetch("/api/koozies/latest");
      const data = await response.json();
      const koozies = data as IKoozie[];
      setLatest(koozies);
      // this.setState({ forecasts: data, loading: false });
    };

    if (latest.length === 0) {
      populateLatestKoozies();
    }
  }, []);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Recently Added Koozies</h2>
        <GridContainer>
          {latest.map(koozie => {
            return (
              <GridItem md={4} sm={4} key={koozie.name}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href={koozie.images.bg}>
                      <img src={koozie.images.bg} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${koozie.images.bg})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>Gucci</h4>
                    <p className={classes.cardDescription}>{koozie.description}</p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.priceContainer}>
                      <span className={classNames(classes.price, classes.priceOld)}> €1,430</span>
                      <span className={classNames(classes.price, classes.priceNew)}> €743</span>
                    </div>
                    <div className={classNames(classes.stats, classes.mlAuto)}>
                      <Tooltip
                        id="tooltip-top"
                        title="Saved to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon simple color="rose">
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}

          {/*<GridItem md={4} sm={4}>*/}
          {/*  <Card product plain>*/}
          {/*    <CardHeader image plain>*/}
          {/*      <a href="#pablo">*/}
          {/*        <img src={dolce} alt="..." />*/}
          {/*      </a>*/}
          {/*      <div className={classes.coloredShadow} style={{ backgroundImage: `url(${dolce})`, opacity: 1 }} />*/}
          {/*    </CardHeader>*/}
          {/*    <CardBody className={classes.textCenter} plain>*/}
          {/*      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>*/}
          {/*      <p className={classes.cardDescription}>*/}
          {/*        The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket*/}
          {/*        square and leather loafers.*/}
          {/*      </p>*/}
          {/*    </CardBody>*/}
          {/*    <CardFooter plain>*/}
          {/*      <div className={classes.priceContainer}>*/}
          {/*        <span className={classNames(classes.price, classes.priceOld)}> €1,430</span>*/}
          {/*        <span className={classNames(classes.price, classes.priceNew)}> €743</span>*/}
          {/*      </div>*/}
          {/*      <div className={classNames(classes.stats, classes.mlAuto)}>*/}
          {/*        <Tooltip*/}
          {/*          id="tooltip-top"*/}
          {/*          title="Saved to Wishlist"*/}
          {/*          placement="top"*/}
          {/*          classes={{ tooltip: classes.tooltip }}*/}
          {/*        >*/}
          {/*          <Button justIcon simple color="rose">*/}
          {/*            <Favorite />*/}
          {/*          </Button>*/}
          {/*        </Tooltip>*/}
          {/*      </div>*/}
          {/*    </CardFooter>*/}
          {/*  </Card>*/}
          {/*</GridItem>*/}
          {/*<GridItem md={4} sm={4}>*/}
          {/*  <Card product plain>*/}
          {/*    <CardHeader image plain>*/}
          {/*      <a href="#pablo">*/}
          {/*        <img src={tomFord} alt="..." />*/}
          {/*      </a>*/}
          {/*      <div className={classes.coloredShadow} style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }} />*/}
          {/*    </CardHeader>*/}
          {/*    <CardBody className={classes.textCenter} plain>*/}
          {/*      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>*/}
          {/*      <p className={classes.cardDescription}>*/}
          {/*        The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket*/}
          {/*        square and leather loafers.*/}
          {/*      </p>*/}
          {/*    </CardBody>*/}
          {/*    <CardFooter plain>*/}
          {/*      <div className={classes.priceContainer}>*/}
          {/*        <span className={classNames(classes.price, classes.priceOld)}> €1,430</span>*/}
          {/*        <span className={classNames(classes.price, classes.priceNew)}> €743</span>*/}
          {/*      </div>*/}
          {/*      <div className={classNames(classes.stats, classes.mlAuto)}>*/}
          {/*        <Tooltip*/}
          {/*          id="tooltip-top"*/}
          {/*          title="Saved to Wishlist"*/}
          {/*          placement="top"*/}
          {/*          classes={{ tooltip: classes.tooltip }}*/}
          {/*        >*/}
          {/*          <Button justIcon simple color="rose">*/}
          {/*            <Favorite />*/}
          {/*          </Button>*/}
          {/*        </Tooltip>*/}
          {/*      </div>*/}
          {/*    </CardFooter>*/}
          {/*  </Card>*/}
          {/*</GridItem>*/}
        </GridContainer>
      </div>
    </div>
  );
};
export default SectionLatestKoozies;
