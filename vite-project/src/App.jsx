import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./Login";
import Home from "./Home";
import ProtectdRouts from "./ProtectRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        {/* <Route path="/" element= {<ProtectdRouts/>}/> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
