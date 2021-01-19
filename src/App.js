import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/Cards";
import Count from "./components/Count";
import DetailScreen from "./components/DetailScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <DiscogsProvider>
          <div className="App">
            <Count />
            <Route exact path={"/"} component={ListScreen} />
            <Route path={"/:id/detail"} component={DetailScreen} />
            {/* <CardDetail /> */}
             <DetailScreen />
          </div>
        </DiscogsProvider>
      </Switch>
    </Router>
  );
}

export default App;
