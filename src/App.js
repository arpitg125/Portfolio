import React from 'react';
import { Navbar } from './components/Navbar';
import {Hero} from './components/HeroSection'
import { Experience } from './components/Exprience';
import { About } from './components/About';
import AboutMe from './components/AboutMe';
import ChessSection from './components/ChessSection';
import FrontendSection from './components/FrontendSection';
import MLSection from './components/MLSection';
import GitHubSection from './components/GitHubSection';  // New Section
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <GitHubSection/>
      <Footer />
    </div>
  );
}

export default App;
