import React, { useState } from 'react';
import { Document, Page,} from '@react-pdf/renderer';
import mypdf from './Assests/rahul_Portfolio.pdf';

import profile from './Assests/rahul-profile.jpg';
import arrow from './Assests/arrow.png';
import checkmark from './Assests/checkmark.png';
import education from './Assests/education.png'
import experience from './Assests/experience.png'
import github from './Assests/github.png'
import images from './Assests/IMG_20240830_213334.jpg'
import linkedin from './Assests/linkedin.png'
import project1 from './Assests/youtube.jpg'
import projectone from './Assests/youtube_home.gif'
import project2 from './Assests/netflix.jpg'
import projecttwo from './Assests/netflix_animation.gif'

// import project3 from './Assests/project-3.png'
import mail from './Assests/email.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



function App() {
  let linkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/raahul423/'
  }

  let Github = () => {
    window.location.href = 'https://github.com/Raahul423'

  }
  let ytclone=()=>{
    window.location.href='https://github.com/Raahul423/YouTube-Clone'
  }
  let netflixclone=()=>{
    window.location.href='https://github.com/Raahul423/Netflix-clone'
  }
  let netflixclonelive=()=>{
    window.location.href='https://net-flix-clone423.netlify.app/'
  }


  let Contact = () => {
    window.location.href = './#contact'
  }

  const [isOpen, setisOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen)
  };

  function navbar() {
    // console.log("hii");
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    const cross = document.querySelector(".cross");

    // Show the menu and cross icon, hide the main icon
    menu.classList.add("open");
    menu.classList.remove("hide"); // Ensure it's not hidden
    icon.classList.add("firsticon");
    icon.classList.remove("icon-show"); // Hide the main icon
    cross.classList.add("Cross-icon");
    cross.classList.remove("crosshide"); // Ensure cross is visible
  }

  function crossicon() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    const cross = document.querySelector(".cross");

    // Hide the menu and cross icon, show the main icon
    menu.classList.add("hide");
    menu.classList.remove("open"); // Ensure it's not open
    icon.classList.add("icon-show");
    icon.classList.remove("firsticon"); // Ensure main icon is visible
    cross.classList.add("crosshide");
    cross.classList.remove("Cross-icon");
  }


  return (
    <div className="App">
      <nav id="desktop-nav">
        <div className="logoo">Rahul Pal</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>


      <nav id="responsive-nav">
        <div className="logo">Rahul Pal</div>
        <div className="responsive-menu">
          <div className="responsive-icon"
            onClick={navbar}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="cross" onClick={crossicon}>
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </div>
        </div>
      </nav>


      <section id="profile">
        <div className="section__pic-container">
          <img src={profile} alt="Rahul Pal profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Rahul Pal</h1>
          <div className="section-Dev">
            <p className="section__text__p2">Frontend &nbsp;</p>
            <p className="section__text__p3">Developer.</p>
          </div>


          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open(mypdf)}> Download CV
            </button>
            <button className="btn btn-color-1" onClick={Contact}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img onClick={linkedIn} src={linkedin} alt="My LinkedIn profile" className="icon" />
            <img src={github} alt="My Github profile" className="icon"
              onClick={Github} />
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={images} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container   details-2">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3 className="exper" >Experience</h3>
                <p style={{ color: 'white' }}>6 Months <br />Frontend Development</p>
              </div>
              <div className="details-container details-2">
                <img src={education} alt="Education icon" className="icon" />
                <h3 className="exper" >Education</h3>
                <p style={{ color: 'white' }}>BCA. Bachelors Degree<br /> Senior Secondary(XII)</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                <p style={{ color: 'white' }}>I'm a passionate frontend developer with six months of hands-on experience in creating engaging,
                  user-friendly web interfaces. My journey in web development began with a fascination for technology and
                  design, which quickly grew into a full-fledged career pursuit. In this short time, I've honed my skills in
                  HTML, CSS, and JavaScript, and have gained practical experience with popular frameworks and libraries like
                  React.</p><br />

                <p style={{ color: 'white' }}>Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying
                  up-to-date with industry trends. I'm excited to further develop my skills and take on new challenges in the
                  dynamic world of frontend development.</p>

              </p>
            </div>
          </div>
        </div>
        <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#experience'} />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML 5</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS 3</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>TailWind Css</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#projects'} />
      </section>



      {/* -------------Section Projects---------- */}




      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container     color-container">
              <div className="article-container project-cointainer">
                <a href="/" alt="Mythrill" target="_blank">
                  <div className="card">
                    <div className="wrapper">
                      <img src={project1} alt='Error' className="cover-image" />
                    </div>

                    <img src={projectone} alt='Error' className="character" />
                  </div>
                </a>


              </div>
              <h2 className="experience-sub-title project-title">YouTube Clone</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={ytclone}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                  Live Demo
                </button>
              </div>
            </div>



            <div className="details-container color-container">
              <div className="article-container">
                <a href="/" alt="Mythrill" target="_blank">
                  <div className="card">
                    <div className="wrapper">
                      <img src={project2} alt='Error' className="cover-image" />
                    </div>

                    <img src={projecttwo} alt='Error' className="character" />
                  </div>
                </a>

              </div>
              <h2 className="experience-sub-title project-title">Netflix Clone</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={netflixclone}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={netflixclonelive}>
                  Live Demo
                </button>
              </div>
            </div>




            <div className="details-container color-container">
              <div className="article-container">


              <a href="/" alt="Mythrill" target="_blank">

              <div className="card">
                  <div className="wrapper">
                    <img src={project2} alt='Error' className="cover-image" />
                  </div>

                  <img src={projectone} alt='Error' className="character" />
                </div>
              </a>
                


              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                  Github
                </button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/'}>
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#contact'} />
      </section>

{/* ---------contact section-------- */}

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={mail} alt="Email icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:rpal24480@gmail.com">rpal24480@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img src={linkedin} alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/raahul423/">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 Rahul Pal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
