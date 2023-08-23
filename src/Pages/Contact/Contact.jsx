import React, { useState } from "react";
import "./Contact.css";
import Heading from "../../Components/Heading/Heading";
import Googlemap from "../../Components/Googlemap/Googlemap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [mapAddress, setMapAddress] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_zjm1816",
        "template_4ozebb7",
        e.target,
        "DiuUgFULghj2ha3Tx"
      );
      alert("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  const handleMapLinkClick = () => {
    setMapAddress("https://goo.gl/maps/tBi1B8JefxxLLrQW8");
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <Heading text={"STAY IN TOUCH"} />
      </div>
      <div className="contact-details">
        <div className="map-container">
          <div className="map-details">
            <div className="map-address">
              <a
                href={mapAddress}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMapLinkClick}
              >
                <h1>Find Us on the Map</h1>
              </a>
            </div>
          </div>
          <div className="map">
            <Googlemap />
          </div>
        </div>
        <div className="details">
          <div className="formtext">
            <h1>Drop Me a Line</h1>
          </div>
          <div className="formfields">
            <form onSubmit={handleSubmit((data, e) => onSubmit(data, e))}>
              <label>Name:</label>
              <input {...register("from_name", { required: true })} />

              <label>Email:</label>
              <input {...register("email_id", { required: true })} />

              <label>Subject:</label>
              <input {...register("subject", { required: true })} />

              <label>Message:</label>
              <textarea {...register("message", { required: true })} />

              <div className="button-container">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
