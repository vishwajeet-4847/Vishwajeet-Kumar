import React from "react";
import './App.css';


import Home from "./pages/Home/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
 import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./pages/components/Footer/footer";

import Header from "./pages/components/Header/header";


function App(props) {
  return (
    <div className="App">
     <BrowserRouter>
    <Header />
    <main>    
  

     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
</Routes>
</main>


  
     <Footer />
     
     </BrowserRouter>
     
     
    
     
    </div>
  );
}

export default App;
