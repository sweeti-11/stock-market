import React from 'react'
import './Carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import video from "../assest/stockvideo3.mp4";
import { useEffect, useState } from "react";
import video2 from "../assest/video2.mp4";
import video3 from "../assest/video3.mp4";
import video1 from "../assest/video4.mp4";


function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4; // Total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      // Only advance to the next slide if it's not the currently active slide
      if (activeSlide !== totalSlides - 1) {
        setActiveSlide((prevSlide) => prevSlide + 1);
      } else {
        setActiveSlide(0); // Go back to the first slide
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, totalSlides]);

  const handleClick = (index) => {
    setActiveSlide(index);
  };
  return (
    <>
    
     
      <section className="">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
          className="content"
          data-bs-interval="2000"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className={activeSlide === 0 ? "active" : ""}
              aria-current={activeSlide === 0 ? "true" : "false"}
              class="active"
              // aria-current="true"
              aria-label="Slide 1"
              style={{ width: "25%", marginLeft: "-170px", marginTop: "-130px" }}
              onClick={() => handleClick(0)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              className={activeSlide === 1 ? "active" : ""}
              aria-current={activeSlide === 1 ? "true" : "false"}
              aria-label="Slide 2"
              data-interval="1000"
              style={{ width: "25%", marginTop: "-130px" }}
              onClick={() => handleClick(1)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              className={activeSlide === 2 ? "active" : ""}
              aria-current={activeSlide === 2 ? "true" : "false"}
              aria-label="Slide 3"
              style={{ width: "25%", marginTop: "-130px" }}
              onClick={() => handleClick(2)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              className={activeSlide === 3 ? "active" : ""}
              aria-current={activeSlide === 3 ? "true" : "false"}
              aria-label="Slide 4"
              style={{ width: "25%", marginTop: "-130px" }}
              onClick={() => handleClick(3)}
            ></button>
          </div>
          <div className="carousel-inner">
          <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
            <div
              className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}
            >
            
              <h2 className="h2_text">
                fdhggkjhjkghjg
                <br />
              </h2>
              <h2 className="second_h2_text">hjgfyhiljkj</h2>
              <p className="p_text">nvjhghjgghfgh</p>
              <button className="buttonStyle">
                
                kjbvjghghjlj
              </button>
              <button className="buttonStyle2" style={{ marginLeft: "0px" }}>
                gkjhlkjlk
              </button>
            </div>
            <div
              className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}
            >
             <video autoPlay loop muted className="video">
        <source src={video2} type="video/mp4" />
      </video>
      <div
              className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}
            >
              <h2 className="h2_text">ljbjhhuh</h2>
              <h2 className="second_h2_text">trading bot</h2>
              <p className="p_text">lknnklnk</p>
              <button className="buttonStyle2">bjnjn</button>
            </div>
            </div>
            <div
              className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}
            >
             <video autoPlay loop muted className="video">
        <source src={video3} type="video/mp4" />
      </video>
      <div
              className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}
            >
              <h2 className="h2_text">jbjnkjln</h2>
              <p className="p_text">ghgg</p>
              <button className="buttonStyle2">ggh</button>
            </div>
            </div>
            <div
              className={`carousel-item ${activeSlide === 3 ? "active" : ""}`}
            >
             <video autoPlay loop muted className="video">
        <source src={video1} type="video/mp4" />
      </video>
      <div
              className={`carousel-item ${activeSlide === 3 ? "active" : ""}`}
            >
              <h2 className="h2_text">knbmbjb</h2>
              <p className="p_text">jbjkbnkjn</p>
              <button className="buttonStyle2">jbhb</button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carousel