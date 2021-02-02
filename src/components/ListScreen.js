import React, { useState, useEffect, useContext } from "react";
import "fontsource-roboto";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Spinner from "./Spinner";

function ListScreen() {
  const { results, setResults, loading, type} = useContext(DiscogsListContext);


  const newResult = results.filter((result) => {
    return result.type === type;
  });

  const style = {
    marginTop: "10px",
  };

  return (
    <div>
      <Grid container style={style}>
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
              favorite,
              setFavorite,
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
                favorite={favorite}
                setFavorite={setFavorite}
              />
            );
          })
        )}
      </Grid>
    </div>
  );
}

export default ListScreen;
