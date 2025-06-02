import React, { useContext } from "react";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home/Home";
import Context, { userContext } from "./Context/Context";
import MainApp from "./MainApp";

const App = () => {
  return (
    <Context>
      <MainApp />
    </Context>
  );
};



export default App;
