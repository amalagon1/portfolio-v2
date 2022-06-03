import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience'
import Projects from './components/Projects';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <About></About>
        <Experience />
        <Projects />
        <Footer />
      </main>

    </div>
  );
}

export default App;
