import * as React from "react";
import { Link } from "react-router-dom";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

import CustomDropdown from "../../../CustomDropdown/CustomDropdown";
import Button from "../../../CustomButton/CustomButton";

import LinkStyles from "./LinkStyles";

const useStyles = makeStyles(LinkStyles);

export interface ILinks {
  dropdownHoverColor?:
    | "dark"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose";
}

const Links: React.FC<any> = props => {
  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>,
            <a
              href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Sections"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link
              to="/sections#headers"
              className={classes.dropdownLink}              
            >
              <Dns className={classes.dropdownIcons} /> Headers
            </Link>,
            <Link
              to="/sections#features"
              className={classes.dropdownLink}              
            >
              <Build className={classes.dropdownIcons} /> Features
            </Link>,
            <Link
              to="/sections#blogs"
              className={classes.dropdownLink}              
            >
              <ListIcon className={classes.dropdownIcons} /> Blogs
            </Link>,
            <Link
              to="/sections#teams"
              className={classes.dropdownLink}              
            >
              <People className={classes.dropdownIcons} /> Teams
            </Link>,
            <Link
              to="/sections#projects"
              className={classes.dropdownLink}              
            >
              <Assignment className={classes.dropdownIcons} /> Projects
            </Link>,
            <Link
              to="/sections#pricing"
              className={classes.dropdownLink}              
            >
              <MonetizationOn className={classes.dropdownIcons} /> Pricing
            </Link>,
            <Link
              to="/sections#testimonials"
              className={classes.dropdownLink}              
            >
              <Chat className={classes.dropdownIcons} /> Testimonials
            </Link>,
            <Link
              to="/sections#contacts"
              className={classes.dropdownLink}              
            >
              <Call className={classes.dropdownIcons} /> Contacts
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/about-us" className={classes.dropdownLink}>
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link to="/blog-post" className={classes.dropdownLink}>
              <ArtTrack className={classes.dropdownIcons} /> Blog Post
            </Link>,
            <Link to="/blog-posts" className={classes.dropdownLink}>
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>,
            <Link to="/contact-us" className={classes.dropdownLink}>
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link to="/landing-page" className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Landing Page
            </Link>,
            <Link to="/login-page" className={classes.dropdownLink}>
              <Fingerprint className={classes.dropdownIcons} /> Login Page
            </Link>,
            <Link to="/pricing" className={classes.dropdownLink}>
              <AttachMoney className={classes.dropdownIcons} /> Pricing Page
            </Link>,
            <Link to="/shopping-cart-page" className={classes.dropdownLink}>
              <ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
            </Link>,
            <Link to="/ecommerce-page" className={classes.dropdownLink}>
              <Store className={classes.dropdownIcons} /> Ecommerce Page
            </Link>,
            <Link to="/product-page" className={classes.dropdownLink}>
              <ShoppingCart className={classes.dropdownIcons} /> Product Page
            </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              <AccountCircle className={classes.dropdownIcons} /> Profile Page
            </Link>,
            <Link to="/signup-page" className={classes.dropdownLink}>
              <PersonAdd className={classes.dropdownIcons} /> Signup Page
            </Link>,
            <Link to="/error-page" className={classes.dropdownLink}>
              <Error className={classes.dropdownIcons} /> Error Page
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-navbar"
          color={window.innerWidth < 960 ? "info" : "white"}
          target="_blank"
          className={classes.navButton}
          round
        >
          <ShoppingCart className={classes.icons} /> buy now
        </Button>
      </ListItem>
    </List>
  );
};

export default Links;
