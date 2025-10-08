import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import ProjectList from './component/projectList';
import Contact from './component/Contact';
import Education from './component/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <Education />
        <Contact />
      </main>
      <footer className='foot'>
        <p>&copy; 2025 Sayeed Baig❤️. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;