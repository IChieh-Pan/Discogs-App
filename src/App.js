import "./App.css";
import React, { useEffect, useState } from "react";
import { ChatProvider } from "./context/ChatContext";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Card";
import Count from "./components/Count";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Typography from "@material-ui/core/Typography";
import BotttomNav from "../src/components/BottomNav";
import BottomNav from "../src/components/BottomNav";
import TopBar from "./components/TopBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Chatroom from "./components/Chatroom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContex";
import { ThemeProvider, Button } from "@material-ui/core";
import { theme } from "./context/ThemeContext.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import MyCssBaseline from "./components/MyCssBaseline";
import MyFavList from "./components/MyFavList";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyCssBaseline />
        <AuthProvider>
          <ChatProvider>
            <Switch>
              <DiscogsProvider>
                <TopBar />
                <Count />

                <Route exact path="/" component={ListScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/mylist" component={MyFavList} />
                <Route
                  path="/detail/:id/:type"
                  render={(props) => (
                    <Detail
                      id={props.match.params.id}
                      type={props.match.params.type}
                    />
                  )}
                />
                <Route exact path="/chatroom" component={Chatroom} />
                <BottomNav />
              </DiscogsProvider>
            </Switch>
          </ChatProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
