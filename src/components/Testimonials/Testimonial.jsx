import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import mohim from "../../img/mohim.jpg";
import sahid from "../../img/sahid.jpg";
import sanjay from "../../img/sanjay.jpg";
import uttam from "../../img/uttam.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: mohim,
      review:
        "I had the pleasure of working with Yash Gaikwad on a recent project, and I must say that he is an outstanding team player. Yash's ability to collaborate and communicate effectively with team members was instrumental in ensuring that our project was delivered on time and to the highest standard. His willingness to lend a helping hand and provide support whenever needed was truly impressive. Yash's positive attitude and strong work ethic made working with him a truly enjoyable experience. I would highly recommend Yash as a valuable asset to any team, and I look forward to the opportunity to work with him again in the future.",
    },
    {
      img: sahid,
      review:
        "Yash Gaikwad is an exceptional team player who truly embodies the spirit of collaboration. His excellent communication skills and ability to build strong relationships with team members ensured that we were able to work effectively and efficiently towards our shared goals. Yash's positive attitude and willingness to take on new challenges made him an invaluable asset to our team, and his contributions were integral to the success of our project. I would highly recommend Yash to any team looking for a reliable, hardworking and dedicated team member.",
    },
    {
      img: sanjay,
      review:
        "Working with Yash Gaikwad was a truly collaborative experience. His willingness to listen to ideas and work together towards a common goal made our team stronger and more efficient. Yash's dedication and hard work was evident throughout the project and his attention to detail ensured that everything was completed to the highest standard. His positive attitude and friendly personality made him a pleasure to work with, and I would highly recommend Yash as a team member to anyone looking for someone who is committed to achieving success through teamwork.",
    },
    {
      img: uttam,
      review:
        "I had the pleasure of working with Yash Gaikwad on a complex project, and I was impressed by his ability to work seamlessly with the rest of the team. Yash's commitment to teamwork was evident in everything he did, and he was always willing to go above and beyond to support his colleagues. His ability to collaborate and communicate effectively was essential in ensuring that we met our deadlines and achieved our goals. I would highly recommend Yash as a team member to anyone looking for someone who is reliable, dedicated, and truly committed to the success of the team.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>TESTIMONIALS </span>
        <span>OF TEAM MEMBERS </span>
        <span>I HAVE RECENTLY WORKED WITH....</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
