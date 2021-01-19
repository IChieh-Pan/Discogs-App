import React, { useContext, useState } from 'react'
import { DiscogsListContext } from "../context/DiscogsListContext";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";




function DetailScreen() {

    const { item, setItem } = useContext(DiscogsListContext);

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

    const style = item.style 
    console.log(style);

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
          <SendIcon />
        </ListItemIcon>
                <ListItemText primary={item.title} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={item.style} />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Style" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
                    {style && style.map(() => {
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
    )
}

    export default DetailScreen;