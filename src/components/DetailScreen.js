import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AlbumIcon from "@material-ui/icons/Album";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import StarsIcon from "@material-ui/icons/Stars";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
function DetailScreen(props) {
  const { item, setItem } = useContext(DiscogsListContext);
  let { id } = useParams();
  console.log("id", id);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  // export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const style = item.style;
  console.log(style);

  const label = item.label;
  console.log(label);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <StarsIcon />
        </ListItemIcon>
        <ListItemText primary={props.title} />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AlbumIcon />
        </ListItemIcon>
        <ListItemText primary="Label" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {label &&
            label.map((label) => {
              return (
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              );
            })}
        </List>
      </Collapse>

      {/* <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={item.style} />
      </ListItem> */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AudiotrackIcon />
        </ListItemIcon>
        <ListItemText primary="Style" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {style &&
            style.map((style) => {
              return (
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={style} />
                </ListItem>
              );
            })}
        </List>
      </Collapse>
    </List>
  );
}

export default DetailScreen;
