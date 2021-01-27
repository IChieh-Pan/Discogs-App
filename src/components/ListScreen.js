import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Spinner from "./Spinner";

function ListScreen() {
  const { results, setResults, loading } = useContext(DiscogsListContext);

  return (
    <div>
      <Grid container>
        {loading ? (
          <Spinner />
        ) : (
          results.map((result) => {
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
              />
            );
          })
        )}
      </Grid>
    </div>
  );
}

export default ListScreen;
