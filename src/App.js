import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutUsPage";
import OurServicesPage from "./Pages/OurServicesPage";
import ContentAbout from "./Components/About/ContentAbout";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about" element={<AboutPage />} />
        <Route path="/pages/services" element={<OurServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
