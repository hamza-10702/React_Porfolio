import React, { useState } from "react";
import "./loader.css";

const Loader = () => {
  const [text, setText] = useState("Portfolio Loading...");

  return (
    <div className="main">
      <div className="cssload-preloader">
        {[...text].map((char) => {
          return char === " " ? <span>&nbsp;</span> : <span>{char}</span>;
        })}
        {/* <span>H</span>
        <span>a</span>
        <span>m</span>
        <span>z</span>
        <span>a</span>
        <span>'</span>
        <span>s</span>
        <span> </span>
        <span>P</span>
        <span>o</span>
        <span>r</span>
        <span>t</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
        <span> </span>
        <span>.</span>
        <span>.</span>
        <span>.</span> */}
      </div>

      <div class="cssload-thecube">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
      </div>
    </div>
  );
};

export default Loader;
