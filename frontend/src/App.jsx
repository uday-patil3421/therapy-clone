import { useState } from "react";
import Hero from "./home-page/Hero";
import About from "./home-page/About";
import Service from "./home-page/Service";
import Faq from "./home-page/Faq";
import ContactForm from "./home-page/ContactForm";
import Footer from "./home-page/Footer";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Service />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
