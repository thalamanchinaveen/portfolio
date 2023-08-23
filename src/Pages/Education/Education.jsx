import React from "react";
import Heading from "../../Components/Heading/Heading";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GraduationCap from "../../svg/GraduationCap";

const EducationItem = ({ date, title, subtitle, institution }) => (
  <VerticalTimelineElement
    date={date}
    iconStyle={{ background: "var(--logo-green)", color: "#fff" }}
    icon={<GraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">Percentage: {subtitle}</h4>
    <p>{institution}</p>
  </VerticalTimelineElement>
);

const educationData = [
  {
    date: "2015 - 2018",
    title: "B.Tech (EEE)",
    subtitle: "64.55%",
    institution: "Geethanjali Institute of Science and Technology, Gangavaram"
  },
  {
    date: "2012 - 2015",
    title: "Diploma (DEEE)",
    subtitle: "74.26%",
    institution: "GPT, Nellore"
  },
  {
    date: "2012",
    title: "SSC",
    subtitle: "93%",
    institution: "Sri Vivekananda High School, Buchireddypalem"
  }
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-heading">
        <Heading text="Academic Background: Empowering Knowledge and Learning Journey" />
      </div>
      <div className="list">
        <VerticalTimeline>
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
