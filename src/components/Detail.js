import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  const [data, setData] = useState({});
  const [hasTrackList, setHasTrackList] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  console.log("id", id);
  console.log("type", type);

  useEffect((id, type) => {
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
    fetchData();
  }, []);

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
