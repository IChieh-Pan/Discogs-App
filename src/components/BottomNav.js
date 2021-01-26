import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlbumIcon from "@material-ui/icons/Album";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import FaceIcon from "@material-ui/icons/Face";

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

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Label" icon={<AlbumIcon />} />
      <BottomNavigationAction label="Release" icon={<AudiotrackIcon />} />
      <BottomNavigationAction label="Artist" icon={<FaceIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
