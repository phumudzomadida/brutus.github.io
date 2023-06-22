import React from "react";
import NavBar from './Components/Header';
import About from './Components/AboutJnr';
import Services from "./Components/Services";
import HomeComponent from "./Components/HomeComponent";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HomeComponent />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
