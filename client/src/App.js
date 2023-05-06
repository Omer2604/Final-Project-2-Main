import NavBar from "./layout/header/NavBar/NavBar";
import Footer from "./layout/footer/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Error404 from "./pages/Error404";
import Alphaphores from "./pages/galleryDetails/alphaphoresDetails";
import Donats from "./pages/galleryDetails/donatsDetails";
import HeartCake from "./pages/galleryDetails/heartCakeDetails";
import Macaroons from "./pages/galleryDetails/macaroonsDetails";
import OfirCake from "./pages/galleryDetails/ofirCakeDetails";
import Puffs from "./pages/galleryDetails/puffsDetails";
import RedCake from "./pages/galleryDetails/redCakeDetails";
import Simba from "./pages/galleryDetails/simbaDetails";
import WhiteCake from "./pages/galleryDetails/whiteCakeDetails";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import NewPassword from "./pages/NewPassword";
import AdminSignUp from "./pages/AdminSignUp";
import Logout from "./pages/Logout";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/alphaphoresDetails" element={<Alphaphores />} />
          <Route path="/donatsDetails" element={<Donats />} />
          <Route path="/heartCakeDetails" element={<HeartCake />} />
          <Route path="/macaroonsDetails" element={<Macaroons />} />
          <Route path="/ofirCakeDetails" element={<OfirCake />} />
          <Route path="/puffsDetails" element={<Puffs />} />
          <Route path="/redCakeDetails" element={<RedCake />} />
          <Route path="/simbaDetails" element={<Simba />} />
          <Route path="/whiteCakeDetails" element={<WhiteCake />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/AdminSignUp" element={<AdminSignUp />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
