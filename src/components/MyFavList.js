import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function MyFavList() {
  const { favList, getFavorites } = useContext(AuthContext);
  console.log("V", favList);

  const style = {
    marginTop: "10px",
    display: "flex",
  };

  return (
    <Box ml={8} pt={3}>
      <Container component="div" maxWidth="lg" align="center">
        <Grid
          container
          style={style}
          justify="start"
          alignItems="center"
          /* alignItems="flex-start" */
          spacing={4}
        >
          {favList &&
            favList.map((result) => {
              return <Cards key={result.id} result={result} />;
            })}
        </Grid>
      </Container>
    </Box>
  );
}

export default MyFavList;
