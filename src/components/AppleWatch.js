import React from "react";
import appleWatch from "../assets/appleWatch.jpeg";

function AppleWatch() {
  return (
    <div className="apple-watch">
      <h1 className="title">
        <span className="apple-logo"></span>WATCH
      </h1>
      <h5>SERIES 6</h5>
      <p>The future of heath is on your wrist</p>
      <a href="www.google.com">Learn more</a>
      <a href="www.google.com">Buy </a>
      <img src={appleWatch} className="apple-watch-img" />
    </div>
  );
}

export default AppleWatch;
