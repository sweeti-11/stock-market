import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import AyurvedicArtical from '../assest/AyurvedicArtical01.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from "@chakra-ui/media-query";
function Artical() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const divVariants = {
        mobile: {
            height: "342px",
            marginTop: "-25px",
        },
        desktop: {
            height: "434px",
            marginTop: "-25px",
        },
    };

    const hoverVariants = {
        desktop: {
            rotate: 360,
        },
        mobile: {},
    };



    useEffect(() => {
        AOS.init({
            duration: 300, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 200, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div
                      style={{marginLeft:'-10px'}}
                        data-aos="zoom-in-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="col-lg-5 wow fadeIn">
                        <motion.img

                            whileHover={!isMobile ? hoverVariants.desktop : hoverVariants.mobile}
                            transition={{ duration: 0.5 }}
                            initial={isMobile ? "mobile" : "desktop"}
                            variants={divVariants}
                            animate={isMobile ? "mobile" : "desktop"}

                            className="Tea_plate" src={AyurvedicArtical} alt="" loading='lazy'/>
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="col-lg-6 wow fadeIn" >
                        <div className="section-title">
                            <h1 className="display-6"  style={{ fontFamily: 'serif' }}>The Chay Wala Special Ayurvedic (Kalyan) Tea </h1>
                        </div>
                        <p className="mb-4" style={{fontFamily:"sans-serif",fontSize:'20px'}}>Our Ayurvedic tea is a delicious and nutritious tea. It's an ancient, holistic remedy for many ailments. It's full of natural ingredients that are great for your health. It has ginger, cardamom, cinnamon, tulsi leaves, turmeric, cloves, and black pepper.</p>
                        <p className="mb-4" style={{fontFamily:"sans-serif",fontSize:'20px'}}>It's made from a combination of herbs and spices that have been used for centuries to promote health and wellness. All are known to boost immunity and improve digestion and reduce inflammation even promote weight loss. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artical