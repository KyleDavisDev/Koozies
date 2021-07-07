import * as React from "react";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";
import { Drawer, IconButton, Hidden, AppBar, Button, Toolbar, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Links from "./components/Links/Links";

import HeaderStyles from "./HeaderStyles";

const useStyles = makeStyles(HeaderStyles);

export interface IHeaderProps {
  color: "primary" | "info" | "success" | "warning" | "danger" | "transparent" | "white" | "rose" | "dark";
  brand?: string;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll: {
    height: number;
    color: "primary" | "info" | "success" | "warning" | "danger" | "transparent" | "white" | "rose" | "dark";
  };
}

const Header: React.FC<IHeaderProps> = props => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Link to="/">Koozies!</Link>
        </Button>
        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{<Links />}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu open={true} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{<Links />}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
