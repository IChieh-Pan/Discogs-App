import React, { useState, useContext, useEffect } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import StarBorder from "@material-ui/icons/StarBorder";
import Typography from "@material-ui//core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    h4: {
      margin: "5",
    },
  },
});

function Detail({ id, type }) {
  const { test } = useContext(DiscogsListContext);
  const [data, setData] = useState({});
  const [hasTrackList, setHasTrackList] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  console.log("id", id);
  console.log("type", type);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://api.discogs.com/${type}s/${id}`);
    const data = await response.json();
    console.log("data2", data);
    setData(data);
    if ("tracklist" in data) {
      setHasTrackList(true);
    } else if ("profile" in data) {
      setHasProfile(true);
    }
  };

  const useStyles = makeStyles({
    list: {
      marginTop: 0,
      marginBottom: 0,
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box m={8}>
        <Grid md={8} lg={8}>
          <h2>{data.title}</h2>

          <div className={classes.list}>
            {hasTrackList && (
              <div>
                <h4>Tracklist:</h4>
                <ol textAlign="left">
                  {data.tracklist.map((track, index) => (
                    <li key={index}>
                      {" "}
                      {track.title}, {track.duration}{" "}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {hasProfile && (
              <div>
                <h4>Introduction:</h4>
                <p>{data.profile}</p>
              </div>
            )}
            <h4>{data.uri}</h4>
          </div>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Detail;
