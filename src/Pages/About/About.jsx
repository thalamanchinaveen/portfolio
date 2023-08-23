import React, { useState, useEffect } from "react";
import Heading from "../../Components/Heading/Heading";
import "./About.css";
import pic from "../../Images/pic.jpg";
const About = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleEmailButtonClick = () => {
    const email = "nthalamanchi@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };
  useEffect(() => {
    setShowDiv(true);
  }, []);
  const waveText = (text, className, marginRightIndex = []) =>
    Array.from(text).map((char, index) => (
      <span
        key={index}
        style={{
          "--i": index + 1,
          marginRight: marginRightIndex.includes(index) ? "5px" : "0",
        }}
      >
        {char}
      </span>
    ));

  return (
    <section className="about" id="about">
      <div className="about-heading">
        <Heading text="Discover About Me" />
      </div>
      <div className="about-sections">
        <div className={`about-side ${showDiv ? "show" : ""}`}>
          <div className="profile">
            <div className="image">
              <img src={pic} alt="pic" />
            </div>
            <div className="text">
              <p className="name waviy2">
                {waveText("THALAMANCHINAVEENKUMAR", "waviy2", [10, 16])}
              </p>
              <p className="role waviy">
                {waveText("WEBDEVELOPER", "waviy", [2])}
              </p>
            </div>
          </div>
          <p className="dots">{".".repeat(51)}</p>
          <div className="address">
              <h4>Contact : <span>8639507812</span></h4>
              <h4>Email : <span>nthalamanchi@gmail.com</span></h4>
              <h4>City : <span>SPSR Nellore</span></h4>
          </div>
          <p className="dots">{".".repeat(51)}</p>
          <div className="contact-me" onClick={handleEmailButtonClick}>
            <div className="button-div">
              <button>CONTACT ME</button>
            </div>
            <div className="svg-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="11px"
                viewBox="0 0 576 512"
                fill="white"
              >
                <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16h404c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h476zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h476z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="hello">hello world ,</div> <br />
          <div className="matter">
            Myself Thalamanchi Naveen Kumar, a dedicated UI Developer with a
            passion for crafting captivating digital experiences. With 6 months
            of immersive internship experience in ReactJS development, I embody
            resourcefulness and innovation in my approach. My insatiable
            appetite for learning drives me to continually refine my skills,
            aligning them with the latest industry trends. I thrive on the
            challenge of pushing boundaries, channeling my creativity into
            designing and developing cutting-edge websites. Proficient in a
            diverse array of tools and technologies, including JavaScript, React
            JS, Bootstrap, and CSS, I have a solid foundation in building
            dynamic web applications and scripts. With an eye for detail and a
            commitment to excellence, I bring my expertise to the table when
            developing solutions for both public sector clients and beyond.As I
            move forward, I am dedicated to exceeding client expectations,
            consistently delivering projects to the highest standards. Let's
            collaborate to turn ideas into reality and shape the digital
            landscape together.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
