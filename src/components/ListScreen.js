import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { DiscogsListContext } from "../context/DiscogsListContext";

function ListScreen() {
  const { results, setResults, loading, setLoading } = useContext(
    DiscogsListContext
  );

  return (
    <div>
      <Grid container>
        {if (loading==true) {
          <h2>Loading...</h2>
        }
          else {results.map((result) => {
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
        }

         {/* { !loading ? 
          <h2>Loading...</h2> : 
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
        } */}
      </Grid>
    </div>
  );
}

export default ListScreen;
