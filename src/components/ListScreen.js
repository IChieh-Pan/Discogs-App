import React, { useState, useEffect } from "react";
import "fontsource-roboto";
import CardDetail from "./CardDetail";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";

// import { BatteryAlert } from "@material-ui/icons";

function ListScreen() {
  const [data, setData] = useState({});
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("underground-resistance");

  useEffect(() => {
    fetchData();
  }, [null]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.discogs.com//database/search?q=${search}&key=bsJCAGTsbOBTVFHLLILq&secret=fWchXQtBWETnYKeYagJLnBTqmWaaUokV`
    );
    const data = await response.json();
    setData(data);

    console.log("data", data);

    const dataValue = Object.values(data);
    console.log("dataValue", dataValue);
    const results = dataValue[1];
    console.log("resultsperpage", results);

    /*    const item = results[22];
    console.log("item", item);
    setItem(item); */
  };

  /* const item = Object.values(data);
  console.log("item", item); */

  {
    results &&
      results.map((results) => {
        const { id, title, cover_image } = results;
        return (
          <Grid container>
            <CardDetail
              image={results.cover_image}
              title={results.title}
              id={results.id}
            />
          </Grid>
        );
      });
  }
}

export default ListScreen;
