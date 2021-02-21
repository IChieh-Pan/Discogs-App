import React, { useContext } from "react";
import "fontsource-roboto";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Spinner from "./Spinner";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiContainer-maxWidthLg": {
      maxWidth: "100%",
    },
    /*  paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }, */
  },
}));

function ListScreen() {
  const classes = useStyles();
  const { results, loading, type } = useContext(DiscogsListContext);

  const newResult = results.filter((result) => {
    return result.type === type;
  });

  const style = {
    marginTop: "10px",
    display: "flex",
    // margin: "auto",
  };

  return (
    <Box ml={8} pt={3}>
      <Container component="div" maxWidth="lg" align="center">
        <Grid
          container
          style={style}
          justify="center"
          alignItems="start"
          /* alignItems="flex-start" */
          spacing={4}
        >
          {loading ? (
            <Spinner />
          ) : (
            newResult.map((result) => {
              return <Cards key={result.id} result={result} />;
            })
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default ListScreen;
