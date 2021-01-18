import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import CardDetail from "./CardDetail";
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
          results.map((results) => {
            const { id, title, cover_image } = results;
            return (
              <CardDetail
                key={results.id}
                cover_image={results.cover_image}
                title={results.title}
              />
            );
          })}
      </Grid>
    </div>
  );
}

export default ListScreen;
