import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { grey, deepOrange } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Barlow Condensed",
    h5: {
      fontFamily: "Barlow Condensed",
      fontWeight: 500,
      lineHeight: 1.167,
      fontSize: "1.4rem",
      color: "#000000",
    },
    body2: {
      fontFamily: "Barlow Condensed",
      fontWeight: 300,
      lineHeight: 1.167,
      fontSize: "1.4rem",
      color: "#000000",
    },
    button: {
      border: "0.5px",
      borderColor: "#e7e7e7",
      borderStyle: "solid",
      color: "secondary",
    },
  },
});

/* const useStyles = makeStyels({

}) */
/* const theme = createMuiTheme({
  typography: {
    h5: {
      color: "black",
      fontWeight: 200, // or 'bold'
    },
    body2: {
      color: "black",
      fontWeight: 400,
    },
  },
}); */

function Cards(props) {
  // const initialState = 0;
  const addWishList = () => {
    setWishList(wishList + 1);
  };

  const initialState = () => Number(window.localStorage.getItem("key")) || 0;

  const [favorite, setFavorite] = useState([]);
  const [checked, setChecked] = useState(false);
  const [wishList, setWishList] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(wishList));
  });

  const resetWishList = () => {
    const msg = "This will clear your wishlist, are you sure?";
    if (window.confirm(msg)) {
      setWishList(initialState);
    }
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    details: {
      display: "flex",
      flexDirection: "row",
    },
    content: {
      width: 400,
    },
    media: {
      width: 200,
    },
    actions: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();
  const formatList = props.format;
  // console.log("Format", formatList);

  // const addFavorite = (id) => {

  //   addFavorite(id)
  //   console.log("works");
  //   //setFavorite([...favorite, props]);
  //   // console.log(setFavorite(props));
  // };

  return (
    <div>
      {/* <h1>Your Wishlist:{wishList}</h1> */}
      <ThemeProvider theme={theme}>
        <Card className={classes.root}>
          <Link
            variant="body2"
            to={`/detail/${props.id}/${props.type}`}
            style={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <div className={classes.details}>
                <CardMedia
                  className={classes.media}
                  image={props.cover_image}
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" align="left">
                    {props.title}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    component="p"
                    display="block"
                  >
                    Type: {props.type}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    component="p"
                    display="block"
                  >
                    Year: {props.year}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    component="p"
                    display="block"
                  >
                    Format:{formatList && formatList.join(" , ")}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
          </Link>
          <CardActions className={classes.actions} justifyContent="flex-end">
            <p>favorites: {favorite.length}</p>
            <Button variant="text" size="small" color="black">
              Share
            </Button>
            <Button
              variant="text"
              size="small"
              color="black"
              onClick={() => props.addFavorite(props.id)}
            >
              Save Favorite
            </Button>
            {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            onChange={()=>addWishList(1)}
            inputProps={{ "aria-label": "primary checkbox" }}
          /> */}
            <button onClick={() => addWishList()}>add</button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
