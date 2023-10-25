import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CVReviewStatus from "./pages/CVReviewStatus";
import Notifications from "./pages/Notifications";
import { TrainingOfferPage } from "./pages/TrainingOfferPage";

import CVMessages from "./pages/CVMessages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CVReviewStatus" element={<CVReviewStatus />} />
        <Route path='trainingoffer' element={<TrainingOfferPage/>}/>

        <Route path="/CVMessages" element={<CVMessages />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
