import React from "react";
import team1 from "../assest/backofc.jpg";
import "./Slider.css";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  return (
    <div>
    <div class="marquee-wrapper">
	<div class="container">
		<div class="marquee-block">
			<div class="marquee-inner to-left">
				<span>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn mb-3" style={{fontSize:"15px"}} >
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
				</span>
				<span>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price">
                            +6.00(1.35%)
                          </p>
					</div>
					<div class="marquee-item">
          <img src={require("../assest/relince.png")} alt="card-img"/>
						<p class="text-white mb-0">Relince Jio</p>
            <p className="card-text-price text-white mb-0">500 ₹/-</p>
            <p className="card-price incriment-decrimetn ">
                            +6.00(1.35%)
                          </p>
					</div>
				</span>
			</div>
		</div>
	</div>
</div>
     
          </div>
  );
};

export default Slider;
