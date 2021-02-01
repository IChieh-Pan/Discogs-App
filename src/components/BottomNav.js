import React, { useContext, useState } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlbumIcon from "@material-ui/icons/Album";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import FaceIcon from "@material-ui/icons/Face";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

// export default function SimpleBottomNavigation() {
function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { results, setResults, fetchData, setType } = useContext(
    DiscogsListContext
  );
  console.log("results", results);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setType("label");
    } if (newValue === 1) {
      setType("release")
    }
    if (newValue === 2) {
      setType("master")
    }
      if (newValue === 3 ) {
        setType("artist")
      }
  };

  /* results.map((results) => {
    if (results.type.value === "master") {
       results;
    }
    console.log("x",results)
  }); */

  /* 
  const label = (results) => {
    if (results.values === "master") {
      return results;
    }
  };
  console.log(label); */

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        handleChange(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Label" icon={<LocalOfferIcon />} />
      <BottomNavigationAction label="Release" icon={<AudiotrackIcon />} />
      <BottomNavigationAction label="Master" icon={<AlbumIcon />} />
      <BottomNavigationAction label="Artist" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
