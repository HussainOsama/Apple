import "../Hussain.css";
import AppleWatch from "./AppleWatch";
import Fitness from "./Fitness";
import MacbookAir from "./MacBookAir";
import One from "./One";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function Section2() {
  return (
    <div>
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

export default Section2;
