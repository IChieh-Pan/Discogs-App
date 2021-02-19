import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../context/AuthContex";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import vinylPlaceholder from "../image/vinylPlaceholder.jpg";
import {
  ImportantDevicesTwoTone,
  InsertDriveFileTwoTone,
} from "@material-ui/icons";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Barlow Condensed",
    h5: {
      fontFamily: "IBM Plex Sans",
      fontWeight: 700,
      lineHeight: 1.167,
      fontSize: "1.4rem",
      color: "#000000",
      marginBottom: 0,
      // backgroundColor: "#FED82A",
    },
    body2: {
      fontFamily: "IBM Plex Sans",
      fontWeight: 300,
      lineHeight: 1.3,
      fontSize: "1.06rem",
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
const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    height: 160,
    marginBottom: "1.5rem",
    marginRight: "1.5rem",
    display: "flex",
    flexDirection: "row",
  },
  /* details: {
      display: "flex",
      flexDirection: "row",
    }, */
  content: {
    width: 200,
    height: 130,
    backgroundColor: "#FFD9E8",
    [theme.breakpoints.up("sm")]: {
      width: 400,
      height: 130,
    },
  },
  media: {
    width: "100%",
    height: "100%",
    opacity: 1,
    // mixBlendMode: "multiply",
    position: "relative",
    objectFit: "cover",
  },
  overlay: {
    // position: "absolute",
    objectFit: "contain",
    width: "100%",
    backgroundColor: "#FDBCD5",
  },
  image: {
    width: 200,
    height: 160,
    position: "relative",
    objectFit: "cover",
    mixBlendMode: "multiply",
    filter: "grayscale(100%)",
  },
  /*         thumb: {
      image: (props) =>
       props.thumb === "" ? "../image/VinylPlaceholder.jpg" : { props.cover_image },
    }, */
  actions: {
    paddingRight: 10,
    display: "flex",
    flexDirection: "row-reverse",
    height: 30,
    backgroundColor: "#FFD9E8",
  },
  container: {
    width: 200,
    height: 160,
    backgroundColor: "#FDBCD5",
  },
});

function Cards({ result }) {
  const { id, thumb, title, cover_image, type, country, year, format } = result;
  // const initialState = 0;
  /*  const addWishList = () => {
    setWishList(wishList + 1);
  }; */
  // console.log("id", id);

  const { favList, addFavorite, trigerAdd, removeFav } = useContext(
    AuthContext
  );
  // const initialState = () => Number(window.localStorage.getItem("key")) || 0;
  // const [favorite, setFavorite] = useState([]);
  // const [checked, setChecked] = useState(false);
  // const [wishList, setWishList] = useState(initialState);

  /*  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(wishList));
  }); */

  /*   const resetWishList = () => {
    const msg = "This will clear your wishlist, are you sure?";
    if (window.confirm(msg)) {
      setWishList(initialState);
    }
  }; */

  const classes = useStyles();
  const formatList = format;
  // const thumbImage = thumb;
  const coverImage = cover_image;

  return (
    <div>
      {/* <h1>Your Wishlist:{wishList}</h1> */}
      <ThemeProvider theme={theme}>
        <Card className={classes.root} elevation={0}>
          <div className={classes.container}>
            <div className={classes.image}>
              <CardMedia
                className={classes.media}
                component="img"
                alt={title}
                image={thumb !== "" ? cover_image : vinylPlaceholder}
              />
            </div>
          </div>

          {/* <CardActionArea> */}
          <div className={classes.linkarea}>
            <Link
              variant="body2"
              to={`/detail/${id}/${type}`}
              style={{ textDecoration: "none" }}
            >
              {/* <div className={classes.details}> */}
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" align="left">
                  <Box>{title}</Box>
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  component="p"
                  display="block"
                >
                  Type: {type}
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  component="p"
                  display="block"
                >
                  Format: {formatList && formatList.join(" , ")}
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  component="p"
                  display="block"
                >
                  Year: {year}
                </Typography>
              </CardContent>
            </Link>
            {/* </div> */}

            <div className={classes.actions} justifycontent="flex-end">
              {/* <p>favorites: {favorite.length}</p> */}
              {favList.find((fav) => fav.id === result.id) ? (
                <Button
                  variant="text"
                  size="small"
                  color="black"
                  onClick={() => removeFav(result)}
                >
                  Remove 🖤
                </Button>
              ) : (
                <Button
                  variant="text"
                  size="small"
                  color="black"
                  onClick={() => addFavorite(result)}
                >
                  Add ♡
                </Button>
              )}
              <Button variant="text" size="small" color="black">
                Share
              </Button>
            </div>
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
