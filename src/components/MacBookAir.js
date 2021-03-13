import React from "react";
import macbookAir from "../assets/macbookAir.png";

function MacbookAir() {
  return (
    <div className="apple-watch">
      <h1 className="title">MacBook Air</h1>
      <p>Power. it's in Air</p>
      <a href="www.google.com">Learn more</a>
      <a href="www.google.com">Buy </a>
      <img src={macbookAir} className="apple-watch-img" />
    </div>
  );
}

export default MacbookAir;
