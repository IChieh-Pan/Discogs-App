import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Spinner from "./Spinner";
import { AuthContext } from "../context/Auth";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function ListScreen() {
  const { results, setResults, loading, type } = useContext(DiscogsListContext);
  /* const { addFavorite } = useContext(
    AuthContext
  ); */

  const newResult = results.filter((result) => {
    return result.type === type;
  });

  const style = {
    marginTop: "10px",
    display: "flex",
    // margin: "auto",
  };

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

  const classes = useStyles();

  return (
    <Box ml={8} pt={3}>
      <Container component="div" maxWidth="lg" align="center">
        <Grid
          container
          style={style}
          justify="center"
          alignItems="center"
          /* alignItems="flex-start" */
          spacing={4}
        >
          {loading ? (
            <Spinner />
          ) : (
            newResult.map((result) => {
              const {
                id,
                thumb,
                title,
                cover_image,
                type,
                country,
                year,
                format,
              } = result;
              return (
                <Cards
                  key={id}
                  id={id}
                  cover_image={cover_image}
                  title={title}
                  thumb={thumb}
                  type={type}
                  country={country}
                  year={year}
                  format={format}
                  //favorite={favorite}
                  // addFavorite={addFavorite}
                />
              );
            })
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default ListScreen;
