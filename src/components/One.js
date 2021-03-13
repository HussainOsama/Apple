import React from "react";
import one from "../assets/one.png";

function One() {
  return (
    <div className="apple-fitness">
      <h1 className="title">
        <span className="apple-logo-fitness"></span>One
      </h1>
      <p style={{ marginBottom: 0 }}>Bundle up to six Apple services</p>
      <p style={{ marginTop: 0 }}>And enjoy more for less.</p>
      <a href="www.google.com">Learn more</a>
      <a href="www.google.com">Try it free </a>
      <img src={one} className="apple-fitness-img" />
    </div>
  );
}

export default One;
