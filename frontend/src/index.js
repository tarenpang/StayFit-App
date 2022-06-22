import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import Exercises from "./components/Exercises";
import UserLogin from "./components/UserLogin";
import TrainerLogin from "./components/TrainerLogin"; 
import TrainerDashboard from "./components/TrainerDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";
import RegisterTrainer from "./components/RegisterTrainer";
import About from "./components/About";
import Support from "./components/Support";
import UserProfile from "./components/UserProfile"
import FirstUserLogin from "./components/FirstTimeLogin"
import AddExerciseForm from "./components/AddExerciseForm"
import Trainers from "./components/Trainers"
import TrainerDetail from "./components/TrainerDetail";
import ExerciseDetail from "./components/ExerciseDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/landingpage" element={<LandingPage />}></Route>
        <Route path="/mainpage" element={<MainPage />}></Route>
        <Route path="/exercises" element={<Exercises />}></Route>
        <Route path="/addexercise" element={<AddExerciseForm />}></Route>
        <Route path="/userlogin" element={<UserLogin />}></Route>
        <Route path="/firstuserlogin" element={<FirstUserLogin />}></Route>
        <Route path="/registerUser" element={<RegisterUser />}></Route>
        <Route path="/registerTrainer" element={<RegisterTrainer />}></Route>
        <Route path="/trainerlogin" element={<TrainerLogin/>}></Route>
        <Route path="/trainerdashboard" element={<TrainerDashboard />}></Route>
        <Route path="/userdashboard" element={<TrainerDashboard />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/trainers" element={<Trainers />}></Route>
        <Route path="/saveExercise/:id" element={<ExerciseDetail />}></Route>
        <Route path="/trainerdetail/:id" element={<TrainerDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
