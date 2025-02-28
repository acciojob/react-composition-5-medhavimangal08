import React, { useState } from "react";
import ReactDOM from "react-dom";

const Tabs = (tabs) => {
  let [tabnum, setTabnum] = useState(null);
  let [tabalph, setTabalph] = useState(null);

  function handlecontentnum(e) {
    setTabnum(e.target.innerText);
  }

  function handlecontentAlph(e) {
    setTabalph(e.target.innerText);
  }
  return (
    <div>
      <h1 style={{ textDecoration: "underLine" }}>Output:</h1>
      <ul onClick={handlecontentnum}>
        <li>Tab 1</li>
        <li>Tab 2</li>
        <li>Tab 3</li>
      </ul>
      {!tabnum ? <p>Content for Tab 1</p> : <p>Content for {tabnum}</p>}
      <ul onClick={handlecontentAlph}>
        <li>Tab A</li>
        <li>Tab B</li>
        <li>Tab C</li>
      </ul>
      {!tabalph ? <p>Content for Tab A</p> : <p>Content for {tabalph}</p>}
    </div>
  );
};

export default Tabs;
