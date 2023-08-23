import React from "react";
import Heading from "../../Components/Heading/Heading";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./Skills.css";
import Html from "../../svg/Html";
import Css from "../../svg/Css";
import Js from "../../svg/Js";
import React1 from "../../svg/React1";
import Redux from "../../svg/Redux";

const skillsData = [
  {
    image: <Html/>,
    alt: "html",
    title: "HTML",
    description:
      "I have a strong foundation in HTML (Hypertext Markup Language), which is the standard markup language for creating web pages. I can structure content effectively using semantic HTML elements and understand the principles of accessibility.",
  },
  {
    image: <Css/>,
    alt: "css",
    title: "CSS",
    description:
      "I'm proficient in CSS (Cascading Style Sheets) and can create visually appealing and responsive designs. I'm experienced in layout techniques, styling elements, and using CSS frameworks to enhance the user interface of web applications.",
  },
  {
    image: <Js/>,
    alt: "js",
    title: "JAVASCRIPT",
    description:
      "I'm skilled in JavaScript, the programming language of the web. I can build interactive and dynamic web applications, manipulate the DOM, handle asynchronous operations, and work with various JavaScript libraries and frameworks.",
  },
  {
    image: <React1/>,
    alt: "react",
    title: "REACT",
    description:
      "I have expertise in React, a popular JavaScript library for building user interfaces. I can create reusable components, manage state and props, implement routing, and handle application state efficiently using React's concepts.",
  },
  {
    image: <Redux/>,
    alt: "redux",
    title: "REDUX",
    description:
      "I'm experienced in Redux, a state management library for React applications. I can design and manage a centralized application state, handle complex data flows, and ensure predictable state changes across the application.",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <Heading text="My Arsenal of Abilities" />
      </div>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <AnimationOnScroll
            key={index}
            animateIn={`fadeIn${index + 1}`}
            delay={index * 100} 
          >
            <div className="card" data-index={index}>
              <div className="skills-image">
                {skill.image}
              </div>
              <div className="skill-title">{skill.title}</div>
              <div className="description">{skill.description}</div>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Skills;