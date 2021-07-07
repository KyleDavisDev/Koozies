import * as React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto",
    },
};

const useStyles = makeStyles(styles);

export interface IGridContainerProps {
    children: string | JSX.Element | Array<string | JSX.Element>;
    className?: string | null;
    [key: string]: any;
}

const GridContainer: React.FC<IGridContainerProps> = props => {
    const { children, className, ...rest } = props;
    const classes = useStyles();
    return (
        <Grid container {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

export default GridContainer;