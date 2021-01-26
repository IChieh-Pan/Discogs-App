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
    <Card className={classes.root}>
      <CardActionArea>
        <div className={classes.details}>
          <CardMedia className={classes.media} image={props.cover_image} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography
              align="left"
              variant="body2"
              color="textSecondary"
              component="p"
              display="block"
            >
              Country: {props.country}
            </Typography>
            <Typography
              align="left"
              variant="body2"
              color="textSecondary"
              component="p"
              display="block"
            >
              Year: {props.year}
            </Typography>
            <Typography
              align="left"
              variant="body2"
              color="textSecondary"
              component="p"
              display="block"
            >
              Format:{formatList}.toString()
              {/*              {formatList && formatList.map(
            (item)=> { return <p> {item}.join(",")</p>})} */}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions className={classes.actions} justifyContent="flex-end">
        <Button variant="outlined" size="small" color="light">
          Share
        </Button>
        <Link to={`/detail/${props.id}/${props.type}`}>
          <Button variant="outlined" size="small" color="light">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Cards;
