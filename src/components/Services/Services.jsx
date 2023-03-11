import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Masai from "../../img/masai.jpg";
import college from "../../img/college.png";
import amazon from "../../img/amazon.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Who Am I?</span>
        <span>"Code Artisan"</span>
        <spane>
        
        </spane>
        <button className="button s-button" style={{ marginTop: "25px" }}>
          {" "}
         Resume
        </button>

       <a href="https://github.com/XYashGaikwad"> <button className="button s-button" style={{ marginTop: "10px" }}>
          {" "}
          Github
        </button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={amazon}
            heading={"Aws Certfied Cloud Practioner"}
            detail={"EC2, S3, LAMBDA, CLOUDFORMATION, IAM, VPC, RDS & MORE"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Masai}
            heading={"REACT-NATIVE FRONTEND DEVELOPER"}
            detail={"HTML5, CSS3, TAILWIND CSS, JAVASCRIPT, REACT, REDUX, GIT, NATIVE MODULE DEVELOPMENT."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={college}
            heading={"SAVITRIBAI PHULE PUNE UNIVERSITY"}
            detail={
              "I've Completed my Graduation in BCA i.e Bachelor's in Computer Applications"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
