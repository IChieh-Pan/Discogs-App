import "./App.css";
import React, { useEffect, useState } from "react";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Card";
import Count from "./components/Count";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Detail from "./components/Detail";
import Typography from "@material-ui/core/Typography";
import BotttomNav from "../src/components/BottomNav";
import BottomNav from "../src/components/BottomNav";
import TopBar from "./components/TopBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContex";

function App() {
  return (
    // <ThemeProvider >
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <DiscogsProvider>
            <div className="App">
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
            </div>
          </DiscogsProvider>
        </Switch>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </AuthProvider>
  );
}

export default App;
