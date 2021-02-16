import React, { useState, useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { borders } from "@material-ui/system";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MyFavList from "./MyFavList";
import Grid from "@material-ui/core/Grid";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    /* border: "1px",
    borderColor: "black",
    borderStyle: "solid", */
    width: "100%",
    position: "fixed",
    top: 0,
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "space-between",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    color: "#ffffff",
    fontSize: "1.4rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "#ffffff",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 20,
    width: "20%",
    borderRadius: "5rem",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: theme.spacing(3),
      width: "auto",
      borderRadius: "5rem",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    border: "1px",
    borderColor: "#e7e7e7",
    borderStyle: "solid",
    color: "#ffffff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function TopBar() {
  const { loggedIn, handleLogout, user, favList } = useContext(AuthContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { fetchData } = useContext(DiscogsListContext);
  const [search, setSearch] = useState("");
  // const [menu, setMenu] = useState(null)

  console.log("m", favList);
  const keyCount = Object.keys(favList).length;
  console.log("keyCount", keyCount);
  /* for (let i = 0, len = keys.length; i < len; i++) {
    console.log("g", favList[keys[i]]);
  } */

  const searchHandler = (e) => {
    console.log(`${e.target.value}`);
    setSearch(e.target.value);
  };

  const searchSubmit = (e) => {
    // e.preventDefault(); the buttton is not a form, no need
    fetchData(search);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const history = useHistory();
  const handleLoginPage = () => history.push("/login");

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const favListCount = () => {
    console.log(favList.lenght);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component={Link}
        to="/mylist"
        style={{ textDecoration: "none" }}
      >
        <IconButton aria-label="show 11 new notifications" color="primary">
          <Badge badgeContent={keyCount} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>My List</p>
      </MenuItem>
      <MenuItem component={Link} to="/chatroom">
        <IconButton aria-label="show 4 new mails" color="primary">
          <ChatIcon />
        </IconButton>
        <p>Chatroom</p>
      </MenuItem>
      {user ? (
        <MenuItem onClick={() => handleLogout()}>
          <IconButton
            aria-label="account of current user"
            aria-controls="secondary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Log out</p>
        </MenuItem>
      ) : (
        <MenuItem onClick={() => handleLoginPage("/login")}>
          <IconButton
            aria-label="account of current user"
            aria-controls="secondary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Sign in</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid alignContent={"space-between"}>
            <div style={{ display: "inline-block" }}>
              <Typography
                component={Link}
                to="/"
                // variant="h6"
                className={classes.title}
                style={{ textDecoration: "none" }}
              >
                {"🎧 Discogs 🎧"}
              </Typography>
            </div>
            <div style={{ display: "inline-block" }}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={searchHandler}
                  onClick={searchSubmit}
                  value={search}
                  style={{ borderRadius: "5rem" }}
                />
              </div>
            </div>
          </Grid>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <MenuItem component={Link} to="/mylist"> */}
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              component={Link}
              to="/mylist"
            >
              <Badge badgeContent={keyCount} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            {/* </MenuItem> */}
            <IconButton aria-label="show 4 new mails" color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
              <ChatIcon />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLoginPage}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default TopBar;
