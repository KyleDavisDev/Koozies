import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GridItemStyles from "./GridItemStyles";
const useStyles = makeStyles(GridItemStyles);

export interface IGridItem {
  children: Node;
  className?: string;

  [key: string]: any;
}

const GridItem: React.FC<IGridItem> = (props) => {
  const { children, className = "", ...rest } = props;

  const classes = useStyles();

  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default GridItem;