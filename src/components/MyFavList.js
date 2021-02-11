import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function MyFavList() {
  const { favList, getFavorites } = useContext(AuthContext);

  const style = {
    marginTop: "10px",
    display: "flex",
  };

  return (
    <Box ml={8} pt={3}>
      <Grid container style={style} alignItems="flex-start">
        <ol>
          {favList &&
             favList.map((item) => {
               return <Card key={item.id}></Card>;
            })}
        </ol>
      </Grid>
    </Box>
  );
}

export default MyFavList;
