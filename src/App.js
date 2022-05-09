import React from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";  //importing our defined components

function App() {
  return (
    <div className="app">
      <NavBar/> //displaying our components
      <Sidebar/>
    </div>
  );
}

export default App;