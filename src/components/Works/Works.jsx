import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png"
import js from "../../img/js.png"
import react from "../../img/react.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            TECHNICAL
          </span>
          <span>SKILLS</span>
          <spane>
         <strong>Front-End Technologies</strong> : HTML5, CSS3, TAILWIND CSS, JAVASCRIPT, TYPESCRIPT , REACT, REDUX, GIT, NATIVE MODULE DEVELOPMENT.
           
            <br />
        <strong>Aws Services</strong> : : AWS Lambda, Amazon S3,
Amazon RDS, Amazon DynamoDB, Amazon
CloudFront, Amazon API Gateway & More.
            <br />
       <strong>Back-End Technologies</strong> : Java , Node.js.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html5} alt="HTML" />
          </div>
          <div className="w-secCircle">
            <img src={css3} alt="CSS" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="AWS" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={js} alt="JAVASCRIPT" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="REACT" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
