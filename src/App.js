import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/CardDetail";
import Count from "./components/Count";
import DetailScreen from "./components/DetailScreen";

function App() {
  return (
    <DiscogsProvider>
      <div className="App">
        <Count />
        {/* <ListScreen /> */}
        {/* <CardDetail /> */}
        <DetailScreen />
      </div>
    </DiscogsProvider>
  );
}

export default App;
