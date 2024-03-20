import React from "react";
import "./App.css";
import About from "./components/about/About";
import Cerifications from "./components/certifications/Cerifications";
import Contact from "./components/contact/Contact";
import Qualification from "./components/education/Qualification";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Cerifications />
        <Contact />
      </main>
      <ScrollUp />
      <Footer />
    </React.Fragment>
  );
};

export default App;
