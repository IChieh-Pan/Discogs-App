import "./App.css";
import ListScreen from "./components/ListScreen";
import { DiscogsProvider } from "./context/DiscogsListContext";
import CardDetail from "./components/CardDetail"

function App() {
  return (
    <DiscogsProvider>
      <div className="App">
        <ListScreen />
        <CardDetail />
      </div>
    </DiscogsProvider>
  );
}

export default App;
