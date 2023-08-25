import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../svg/Logo";
import resume from "../../documents/Naveenkumar.pdf";
import Menu from "../../svg/Menu";
import Close from "../../svg/Close";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.5;
      for (const { id } of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition + windowHeight >=
              sectionTop + sectionHeight - offset &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-center">
        {sections.map(({ id, label }) => (
          <div
          key={id}
          className={`nav-link ${id === activeSection ? "active" : ""}`}
          onClick={() => {
            scrollToSection(id);
          }}
        >
          {label}
        </div>
        ))}
      </div>
      <div className="navbar-right">
        <div className="button-div">
          <button>
            <a href={resume} download="resume">
              DOWNLOAD CV
            </a>
          </button>
        </div>
        <div className="svg-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="11px"
            viewBox="0 0 384 512"
            fill="white"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
      <div className="bar" onClick={clickHandler}>
        {clicked ? <Close /> : <Menu />}
      </div>
      {
        clicked && <div className="sidebar">
        <div className="navbar-center2">
          {sections.map(({ id, label }) => (
            <div
            key={id}
            className={`nav-link ${id === activeSection ? "active" : ""}`}
            onClick={() => {
              scrollToSection(id);
              console.log("Link clicked");
              setClicked(!clicked );
            }}
          >
            {label}
          </div>
          ))}
        </div>
        <div className="navbar-right2">
          <div className="button-div">
            <button>
              <a href={resume} download="resume">
                DOWNLOAD CV
              </a>
            </button>
          </div>
          <div className="svg-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="11px"
              viewBox="0 0 384 512"
              fill="white"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
        </div>
        
      </div> 
      }
    </nav>
  );
};

export default Navbar;
