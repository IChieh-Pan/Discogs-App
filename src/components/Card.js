import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { AuthContext } from "../context/AuthContex";
import vinylPlaceholder from "../image/vinylPlaceholder.jpg";
import TextTruncate from "react-text-truncate";

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
      // display: "inline-block",
    },

    button: {
      borderColor: "#e7e7e7",
      color: "#000000",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    height: 160,
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginRight: "1rem",
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
      width: 350,
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
    width: 160,
    height: 160,
    [theme.breakpoints.up("sm")]: {
      width: 200,
      height: 160,
    },
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
    width: 160,
    height: 160,
    [theme.breakpoints.up("sm")]: {
      width: 200,
      height: 160,
    },
    backgroundColor: "#FDBCD5",
  },
});

function Cards({ result }) {
  const { id, thumb, title, cover_image, type, year, format } = result;
  // const initialState = 0;
  /*  const addWishList = () => {
    setWishList(wishList + 1);
  }; */
  // console.log("id", id);

  const { favList, addFavorite, removeFav } = useContext(AuthContext);
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
                  <Box>
                    <TextTruncate line={1} truncateText="…" text={title} />
                  </Box>
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  component="p"
                  display="block"
                >
                  Type: {type}
                </Typography>

                {/* <TextTruncate line={1}
                    element="span"
                    truncateText="…"
                    text= 
                  /> */}

                {/* <Typography
                  align="left"
                  variant="body2"
                  component="p"
                  display="block"
                >
                  Format: {formatList && formatList.join(" , ")}
                </Typography> */}
                <Typography align="left" variant="body2" component="p">
                  Format:
                  <TextTruncate
                    line={1}
                    truncateText="…"
                    text={formatList && formatList.join(" , ")}
                  />
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
                  color="#000000"
                  onClick={() => removeFav(result)}
                >
                  Remove 🖤
                </Button>
              ) : (
                <Button
                  variant="text"
                  size="small"
                  color="#000000"
                  onClick={() => addFavorite(result)}
                >
                  Add ♡
                </Button>
              )}
              <Button variant="text" size="small" color="#000000">
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
