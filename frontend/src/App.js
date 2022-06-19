import "./index.css";
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import ResponsiveAppBar from "./components/Navbar";
import BottomAppBar from "./components/Footer";
import MainPage from "./components/MainPage";
import { Routes, Route, Link, Outlet } from "react-router-dom";


function App() {
  
  // const [backEndData, setBackEndData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setBackEndData(data));
  // }, []);

  return (
    <div>
      <LandingPage/>
      {/* <Link to="/landingpage">Landing Page</Link>
      <Outlet /> */}
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/index" element={<MainPage/>} />
      </Routes> */}
    </div>
  );
}

export default App;
