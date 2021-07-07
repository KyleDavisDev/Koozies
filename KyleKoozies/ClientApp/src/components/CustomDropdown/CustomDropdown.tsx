import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";

import Button, { ICustomButton } from "../CustomButton/CustomButton";

import CustomDropdownStyles from "./CustomDropdownStyles";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
const useStyles = makeStyles(CustomDropdownStyles);

export interface ICustomDropdown {
  hoverColor?:
    | "dark"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose";
  buttonText: string;
  buttonIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  dropdownList: Array<Element | JSX.Element>;
  buttonProps: ICustomButton;
  dropUp?: boolean;
  dropdownHeader?: Node;
  rtlActive?: boolean;
  caret?: boolean;
  dropPlacement?:
    | "bottom"
    | "top"
    | "right"
    | "left"
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
  noLiPadding: boolean;
  innerDropDown?: boolean;
  navDropdown: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

const CustomDropdown: React.FC<ICustomDropdown> = props => {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };
  const handleCloseMenu = (e: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(e);
    }
  };
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropdownHeader,
    dropUp = false,
    caret = true,
    hoverColor = "primary",
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretDropup]: dropUp && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropUp,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  const dropDownMenu = (
    <MenuList role="menu" className={classes.menuList}>
      {dropdownHeader !== undefined ? (
        <MenuItem
          onClick={() => handleCloseMenu(dropdownHeader)}
          className={classes.dropdownHeader}
        >
          {dropdownHeader}
        </MenuItem>
      ) : null}
      {dropdownList.map((prop, key) => {
        return (
          <MenuItem
            key={key}
            onClick={() => handleCloseMenu(prop)}
            className={dropdownItem}
          >
            {prop}
          </MenuItem>
        );
      })}
    </MenuList>
  );
  return (
    <div className={innerDropDown ? classes.innerManager : classes.manager}>
      <div className={buttonText !== undefined ? "" : classes.target}>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {buttonIcon !== undefined ? (
            <props.buttonIcon className={classes.buttonIcon} />
          ) : null}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={dropPlacement}
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true,
          [classes.popperNav]: Boolean(anchorEl) && navDropdown
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            style={
              dropUp
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              {innerDropDown ? (
                dropDownMenu
              ) : (
                <ClickAwayListener onClickAway={handleClose}>
                  {dropDownMenu}
                </ClickAwayListener>
              )}
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CustomDropdown;