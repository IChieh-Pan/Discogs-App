import React, { useContext } from "react";
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
  const { setType } = useContext(DiscogsListContext);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (newValue === 3) {
      setType("label");
    }
    if (newValue === 2) {
      setType("release");
    }
    if (newValue === 1) {
      setType("master");
    }
    if (newValue === 0) {
      setType("artist");
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        handleChange(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Label"
        icon={<LocalOfferIcon />}
        value={3}
      />
      <BottomNavigationAction
        label="Release"
        icon={<AudiotrackIcon />}
        value={2}
      />
      <BottomNavigationAction label="Master" icon={<AlbumIcon />} value={1} />
      <BottomNavigationAction label="Artist" icon={<FaceIcon />} value={0} />
    </BottomNavigation>
  );
}

export default BottomNav;
