import React from "react";
import "./Cerifications.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import certi1 from "../../assets/certificates/certi1.png";
import certi2 from "../../assets/certificates/certi2.png";
import certi3 from "../../assets/certificates/certi3.png";
import certi4 from "../../assets/certificates/certi4.png";
import certi5 from "../../assets/certificates/certi5.png";
import certi6 from "../../assets/certificates/certi6.png";
import certi7 from "../../assets/certificates/certi7.png";

const Data = [
  {
    name: "React - The Complete Guide (Udemy)",
    img: certi1,
  },
  {
    name: "ReactJS Beginners",
    img: certi2,
  },
  {
    name: "ReactJs Advance",
    img: certi3,
  },
  {
    name: "ReactJs",
    img: certi4,
  },
  {
    name: "CSS",
    img: certi5,
  },
  {
    name: "HTML",
    img: certi6,
  },
  // {
  //   name: "Data Analysis with Python",
  //   img: certi7,
  // },
];

const Cerifications = () => {
  return (
    <section className="certifications container section" id="#certifcations">
      <h2 className="section__title">Certifications & Achievements</h2>
      <span className="section__subtitle">Victories I hold</span>

      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        className="certificate__container"
      >
        {Data.map((data) => {
          return (
            <SwiperSlide key={Math.random()} className="certificate__card">
              <a href={data.img} target="_blank">
                <img src={data.img} alt="" className="certificate__img" />
                <div className="certificate__name__desc">
                  <h3 className="certificate__name">{data.name}</h3>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Cerifications;
