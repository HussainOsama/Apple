import "../styles_s.css";
import IPadAir from "./IPadAir";
import IPhone12 from "./IPhone12";
import IPhone12Pro from "./IPhone12Pro";
import Navbar from "./Navbar";

const Section1 = () => {
  return (
    <>
      <Navbar />
      <IPhone12 />
      <IPhone12Pro />
      <IPadAir />
    </>
  );
};

export default Section1;
