// import React from 'react';

// function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-content">
//         <h1>Hi, I'm Sayeed Baig</h1>
//         <p>A Computer Science Engineering student (RVITM,Bangalore)|Aspiring Full-stack Developer|passionate About Software Engineering</p>
//         <div className="hero-buttons">
//             <a href="#projects" className="btn btn-primary">View My Work</a>
//             {/* Link your resume PDF file here. Place it in the `public` folder */}
//             <a href="/resume.pdf" className="btn btn-secondary" download>Download Resume</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from 'react';
import myPhoto from './myPhoto1.png';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Sayeed Baig</h1>
          <p>
            A Computer Science Engineering student (RVITM, Bangalore) | Aspiring Full-stack Developer | 
            Passionate About Software Engineering and enthusiastic of AIML 
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Contact me</a>
            {/* Link  resume PDF file here. Place it in the `public` folder */}
            <a href="/resume.pdf" className="btn btn-secondary" download>Resume Updated soon</a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image">
          <img 
            src={myPhoto}  // dummy image, replace with your own later
            alt="Sayeed Baig" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
