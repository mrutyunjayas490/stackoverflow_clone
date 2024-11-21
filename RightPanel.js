import React from "react";
import "./App.css";

function RightPanel() {
  return (
    <div className="right-panel">
      <h3>The Overflow Blog</h3>
      <ul>
        <li>How to become a better React developer</li>
        <li>Understanding closures in JavaScript</li>
      </ul>

      <h3>Featured Posts</h3>
      <ul>
        <li>Meta discussions on StackOverflow</li>
        <li>Hot meta posts this week</li>
      </ul>

      <h3>Custom Filter</h3>
      <input type="text" placeholder="Add custom filters" />
    </div>
  );
}

export default RightPanel;
