import React from "react";
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

const theme = createMuiTheme({
  typography: {

    h6: {
      fontWeight: 400, // or 'bold'
    },
    body2: {
      fontWeight: 400,
    },
  },
});

function Cards(props) {
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

  const classes = useStyles();
  const formatList = props.format;
  console.log("Format", formatList);

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.details}>
            <CardMedia className={classes.media} image={props.cover_image} />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h6" component="h1" align="left">
                {props.title}
              </Typography>
              <Typography
                align="left"
                variant="body2"
                component="p"
                display="block"
              >
                Country: {props.country}
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
        <CardActions className={classes.actions} justifyContent="flex-end">
          <Button variant="text" size="small" color="primary">
            Share
          </Button>
          <Link to={`/detail/${props.id}/${props.type}`}>
            <Button variant="text" size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default Cards;
