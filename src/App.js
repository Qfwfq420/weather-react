import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search defaultCity="Tehran" />
    </div>
  );
}

export default App;
