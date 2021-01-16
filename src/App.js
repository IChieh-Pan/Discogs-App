import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/CardDetail";
import Count from "./components/Count";

function App() {
  return (
    <DiscogsProvider>
      <div className="App">
        <Count />
        <ListScreen />
        <CardDetail />
      </div>
    </DiscogsProvider>
  );
}

export default App;
