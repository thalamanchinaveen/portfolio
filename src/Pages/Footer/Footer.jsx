import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <p>
        Designed & Developed by <span><b>THALAMANCHI NAVEEN KUMAR</b></span>
      </p>
      <div className="copyright">
        <div className="copyright-symbol">&copy;</div>
        <div className="year">
          {new Date().getFullYear()} , All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
