import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Cards";
import Count from "./components/Count";
import DetailScreen from "./components/DetailScreen";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Detail from "./components/Detail";
import Typography from "@material-ui/core/Typography";
import BotttomNav from "../src/components/BottomNav";
import BottomNav from "../src/components/BottomNav";
import TopBar from "./components/TopBar";
import {ThemeProvider} from "./context/ThemeContext"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <DiscogsProvider>
            <div className="App">
              <TopBar />
              <Count />
              <Route exact path={"/"} component={ListScreen} />
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
    </ThemeProvider>
  );
}

export default App;
