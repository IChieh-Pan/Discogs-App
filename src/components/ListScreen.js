import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Spinner from "./Spinner";
import { AuthContext } from "../context/Auth";

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
  };

  return (
    <Box ml={8} pt={3}>
      <Grid container style={style} alignItems="flex-start">
        {loading ? (
          <Spinner />
        ) : (
          newResult.map((result) => {
            const {
              id,
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
    </Box>
  );
}

export default ListScreen;
