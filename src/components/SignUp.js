import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../context/AuthContex";
import app from "./firebase";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const [state, setState] = useState({ email: "", password: "", username: "" });
  const { signUp } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const initialState = () => Number(window.localStorage.getItem("key"));

  /*  useEffect(() => {
    window.localStorage.setItem("currentUser", JSON.stringify(username, email));
  }, []); */

  const handleChange = (event) => {
    console.log(handleChange);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp(state);
  };

  const classes = useStyles();

  return (
    <Box pt={4}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            type="username"
            label="Name"
            name="username"
            autoComplete="Name"
            autoFocus
            onChange={handleChange}
            value={state.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={state.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={state.password}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              {/*   <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already a member? Log in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Box>
  );
};

export default withRouter(SignUp);
