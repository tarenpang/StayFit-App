import "./index.css";
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import ResponsiveAppBar from "./components/Navbar";
import BottomAppBar from "./components/Footer";
import MainPage from "./components/MainPage";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "./components/Login";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  // const token = getToken();
  // if (token) {
  //   console.log("token is" + token);
  // }

  const [backEndData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackEndData(data));
  }, []);

  return (
    <div>
      <Link to="/landingpage">Landing Page</Link>
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/index" element={<MainPage/>} />
      </Routes> */}
      {/* <Login setToken={setToken} /> */}
    </div>
  );
}

export default App;
