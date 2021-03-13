import React from "react";
import fitness from "../assets/fitness.png";

function Fitness() {
  return (
    <div className="apple-fitness">
      <h1 className="title">
        <span className="apple-logo-fitness"></span>Fitness+
      </h1>
      <p style={{ marginBottom: 0 }}>A new fitness experience for everyone</p>
      <p style={{ marginTop: 0 }}>Powered by Aplle Watch.</p>
      <a href="www.google.com">Learn more</a>
      <a href="www.google.com">Buy </a>
      <img src={fitness} className="apple-fitness-img" />
    </div>
  );
}

export default Fitness;
