import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import Exercises from "./pages/Exercises";
import UserLogin from "./pages/UserLogin";
import "./index.css";
import TrainerLogin from "./pages/TrainerLogin"; 
import TrainerDashboard from "./pages/TrainerDashboard";
import UserDashboard from "./pages/UserDashboard";
import RegisterUser from "./pages/RegisterUser";
import RegisterTrainer from "./pages/RegisterTrainer";
import About from "./pages/About";
import Support from "./pages/Support";
import UserProfile from "./components/UserProfile"
import FirstUserLogin from "./components/FirstTimeLogin"
import AddExerciseForm from "./components/AddExerciseForm"
import Trainers from "./pages/Trainers"
import TrainerDetail from "./components/TrainerDetail";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/firstuserlogin" element={<FirstUserLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/registerTrainer" element={<RegisterTrainer />} />
        <Route path="/trainerlogin" element={<TrainerLogin/>} />
        <Route path="/trainerdashboard" element={<TrainerDashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/addexercise" element={<AddExerciseForm />} />
        <Route path="/saveExercise/:id" element={<ExerciseDetail />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainerdetail/:id" element={<TrainerDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

