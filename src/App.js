import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import LoginPage from "./components/authpages/LoginPage/LoginPage";
import RegisterPage from "./components/authpages/RegisterPage/RegisterPage";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import AlertNotification from "./shared/component/AlertNotification";

// import Eg from "./components/eg";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <AlertNotification />
    </div>
  );
}

export default App;
