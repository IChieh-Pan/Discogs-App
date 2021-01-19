import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { DiscogsListContext } from "../context/DiscogsListContext";
// import Typography from "@material-ui/core/Typography";
// import { BatteryAlert } from "@material-ui/icons";

function ListScreen() {
  const { results, setResults } = useContext(DiscogsListContext);

  return (
    <div>
      <Grid container>
        {results &&
          results.map((result) => {
            const { id, title, cover_image } = result;
            return (
              <Cards
                key={result.id}
                id={result.id}
                cover_image={result.cover_image}
                title={result.title}
              />
            );
          })}
      </Grid>
    </div>
  );
}

export default ListScreen;
