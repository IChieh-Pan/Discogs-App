import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Cards";
import Count from "./components/Count";
import DetailScreen from "./components/DetailScreen";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Detail from "./components/Detail";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DiscogsProvider>
          <div className="App">
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
          </div>
        </DiscogsProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
