import React from "react";
import "./app.css";
import SideBar from "./Components/SideBarSection/SideBar";
import Body from "./Components/BodySection/Body";

const App = () => {
  return (
    <div>
      <div className="container">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default App;
