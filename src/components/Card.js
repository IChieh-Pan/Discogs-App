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
import Box from "@material-ui/core/Box";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Barlow Condensed",
    h5: {
      fontFamily: "IBM Plex Sans",
      fontWeight: 700,
      lineHeight: 1.167,
      fontSize: "1.4rem",
      color: "#000000",
      // backgroundColor: "#FED82A",
    },
    body2: {
      fontFamily: "IBM Plex Sans",
      fontWeight: 300,
      lineHeight: 1.4,
      fontSize: "1.1rem",
      color: "#000000",
    },
    button: {
      /*       border: "0.5px",
      borderStyle: "solid", */
      borderColor: "#e7e7e7",
      color: "#000000",
    },
  },
  shape: {
    borderRadius: 4,
  },
  /*  shadows: [
    3: {
     0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
   } 
  ] */
});

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
      height: 160,
      marginBottom: "1.5rem",
      marginRight: "1.5rem",
      display: "flex",
      // flexDirection: "row",
    },
    /* details: {
      display: "flex",
      flexDirection: "row",
    }, */
    content: {
      width: 400,
      height: 130,
      backgroundColor: "#FBE4ED",
    },
    media: {
      width: 200,
      height: 160,
      opacity: 0.9,
    },
    actions: {
      display: "flex",
      flexDirection: "row-reverse",
      backgroundColor: "#FBE4ED",
      height: 30,
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
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            component="img"
            alt={props.title}
            image={props.cover_image}
          />
          {/* <CardActionArea> */}
          <Link
            variant="body2"
            to={`/detail/${props.id}/${props.type}`}
            style={{ textDecoration: "none" }}
          >
            {/* <div className={classes.details}> */}
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" align="left">
                <Box>{props.title}</Box>
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
            {/* </div> */}

            <div className={classes.actions} justifyContent="flex-end">
              {/* <p>favorites: {favorite.length}</p> */}
              <Button variant="text" size="small" color="black">
                Share
              </Button>
              {/* <Button
                variant="text"
                size="small"
                color="black"
                onClick={() => props.addFavorite(props.id)}
              >
                Save Favorite
              </Button> */}
              {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            onChange={()=>addWishList(1)}
            inputProps={{ "aria-label": "primary checkbox" }}
          /> */}
              {/* <button onClick={() => addWishList()}>add</button> */}
            </div>
          </Link>
          {/* </CardActionArea> */}
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
