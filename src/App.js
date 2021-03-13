import "./App.css";
import "./Hussain.css";
import AppleWatch from "./components/AppleWatch";
import Fitness from "./components/Fitness";
import MacbookAir from "./components/MacBookAir";
import One from "./components/One";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>Work Space</h1>
      <div className="container-fluid">
        <AppleWatch />
        <MacbookAir />
      </div>
      <div className="container-fluid">
        <Fitness />
        <One />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
