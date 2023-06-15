import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import { BsArrowUpRight, BsNutFill } from 'react-icons/bs'
import video from '../assest/Thechaywala.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'
function Video() {
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };


    //   const handleVideoLoaded = () => {
    //     // Video metadata has been loaded
    //     // Set the initial play state based on your requirements
    //     setIsPlaying(false);
    //     videoRef.current.pause();
    //   };

    useEffect(() => {
        AOS.init({
            duration: 500, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 100, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);
    return (

        <>

            <div

                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="container-fluid video my-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="py-5">
                                <h1 className="display-6 mb-4" style={{color:'white',fontWeight:'700'}}>Tea is a drink of health and beauty</h1>
                                <h5 className="fw-normal lh-base fst-italic text-white mb-5">Chay is a fragrant, spicy tea that may help boost heart health, reduce blood sugar levels, aid digestion and help with weight loss.</h5>
                                <div className="row g-4 mb-5">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3" style={{width:'32px',height:'32px'}}>
                                                <i style={{fontSize:'14px'}}> <BsArrowUpRight />  </i>
                                            </div>
                                            <span className="text-dark">Great Tea Assortment</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3" style={{width:'32px',height:'32px'}}>
                                                <i style={{fontSize:'14px'}}> <BsArrowUpRight /> </i>
                                            </div>
                                            <span className="text-dark">Spices & Additives</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3" style={{width:'32px',height:'32px'}}>
                                                <i style={{fontSize:'14px'}}><BsArrowUpRight /> </i>
                                            </div>
                                            <span className="text-dark">Energy Boost</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3" style={{width:'32px',height:'32px'}}>
                                                <i style={{fontSize:'14px'}}> <BsArrowUpRight /></i>
                                            </div>
                                            <span className="text-dark">Good For Health & Beauty</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                data-src={video} ref={videoRef} data-bs-target="#videoModal" onClick={handleToggleMute} style={{marginBottom:'48px'}}  >

                                <span></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
                        </div>
                        <div className="modal-body" >


                            <div className="ratio ratio-16x9">

                                {/* <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" ref={videoRef} src={video} id="video" allowfullscreen allowscriptaccess="always"
                                    allow=""></iframe>  
                            </div> */}
                                <video  
                                    // width="320"
                                    // height="240"
                                    controls 
                                    autoplay
                                    muted
                                    preload='none'
                                >
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Video