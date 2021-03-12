import "./App.css";
import AppleWatch from "./components/AppleWatch";
import MacbookAir from "./components/MacBookAir";

function App() {
  return (
    <div>
      <h1>Work Space</h1>
      <div className="container">
        <AppleWatch />
        <MacbookAir />
      </div>
    </div>
  );
}

export default App;
