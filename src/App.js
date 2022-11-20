import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Backdrop from './components/Backdrop/backdrop'
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [backdrop, setbackdrop] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);


  // if (open) {
  //   return <Backdrop />
  // }




  return (
    <div className="App">
      <main>
        <Nav open={open} setOpen={setOpen}
          toggle={toggle} setToggle={setToggle} />
        <Backdrop backdrop={backdrop} setbackdrop={setbackdrop}
          open={open} setOpen={setOpen}
          toggle={toggle} setToggle={setToggle} />
        <About></About>
        <Experience />
        < Projects />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;
