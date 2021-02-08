import "./App.css";
import React, { useEffect, useState } from "react";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Card";
import Count from "./components/Count";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Detail from "./components/Detail";
import Typography from "@material-ui/core/Typography";
import BotttomNav from "../src/components/BottomNav";
import BottomNav from "../src/components/BottomNav";
import TopBar from "./components/TopBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContex";
import { ThemeProvider, Button } from "@material-ui/core";
import { theme } from "./context/ThemeContext.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import MyCssBaseline from "./components/MyCssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyCssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <DiscogsProvider>
              <TopBar />
              <Count />

              <Route exact path="/" component={ListScreen} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route
                path="/detail/:id/:type"
                render={(props) => (
                  <Detail
                    id={props.match.params.id}
                    type={props.match.params.type}
                  />
                )}
              />
              {/* <DetailScreen />
            <DetailContext /> */}
              <BottomNav />
            </DiscogsProvider>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
