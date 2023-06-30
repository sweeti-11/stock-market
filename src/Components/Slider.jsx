import React, {useState, useEffect}from "react";
import team1 from "../assest/backofc.jpg";
import "./Slider.css";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Slider = () => {
  const MarqueeDataUrl = "https://scripts.bulleyetrade.com/api/getMarket"
  const [Data, setData] = useState([]);
  const getMarqueeData = async (event) => {
    axios.get(MarqueeDataUrl, {
      headers: {
        'Content-Type': 'multipart/form-data',
        
      },
    }).then(async (response) => {
      // console.log(response)
      setData(response.data.Data);
    })
    
    .catch((error) => {
      console.log(error);
    });
  };
 
  useEffect(() => {
  getMarqueeData();
  const intervalId = setInterval(() => {
    getMarqueeData(); // Fetch data at regular intervals
  }, 2000); // Change the interval duration (in milliseconds) as per your requirements

  return () => {
    clearInterval(intervalId); // Clean up the interval when the component unmounts
  };
  }, []);

 
  return (
    <div>
    
    <div class="marquee-wrapper" >
	<div class="container" >
		<div class="marquee-block" >
			<div class="marquee-inner to-left">
      {Data.map((dataObj) => {
          return (
				<span>
					<div class="marquee-item" key={dataObj.id}>
          {/* <img src={require("../assest/relince.png")} alt="card-img"/> */}
          <p class="text-white mb-0">
            {dataObj.symbol}
            </p>
						<p class="text-white mb-0">
            {dataObj.trade_name}
            </p>
            <p className="card-text-price text-white mb-0"  >{dataObj.open}  ₹/-</p>
            <p className="card-price incriment-decrimetn"style={{
                        color: dataObj.price < dataObj.open ? "red" : "green",
                      }} >
                            {dataObj.price} ₹/-
                          </p>
					</div>
				</span>
        ) })}
			</div>
		</div>
	</div>
</div>

     
          </div>
  );
};

export default Slider;
