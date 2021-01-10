import React, { useState, useEffect } from "react";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { BatteryAlert } from "@material-ui/icons";

function ListScreen() {
  const [data, setData] = useState({});
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("Underground-Resistance");

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
    console.log("cover", results);
    const item = results[0];
    console.log("item", item);
    setItem(item);
  };

  /* const item = Object.values(data);
  console.log("item", item); */

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.cover_image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ListScreen;
