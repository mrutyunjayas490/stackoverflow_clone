import React from "react";
import "./Sidebar.css"; // Optional: specific styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Questions</li>
        <li>Tags</li>
        <li>Users</li>
      </ul>
    </div>
  );
};

export default Sidebar;
