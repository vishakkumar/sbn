import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import BodyPage from "./components/BodyPage";
import AboutUs from "./components/AboutUs";
import ServiceDetails from "./components/ServiceDetails";
import Login from './components/Login';
import SignIn from './components/SignIn'; 
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>
      {/* <div className="app-container"> */}
        <HeaderPage />
        
        <Routes>
          <Route path="/" element={<BodyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/HomePage" element={<HomePage/>}    />    
        </Routes>

        <AboutUs />
      {/* </div> */}
    </Router>
  );
}

export default App;
