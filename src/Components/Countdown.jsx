import React, { useState, useEffect } from 'react';
import './Countdown.css'

function Countdown({ target,start,text }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 0);

    return () => {
      clearInterval(timer);
    };
  }, [count, target]);

  return (
    <div className='timer'>
    <h2 style={{color:"white", zIndex:"2"}}>{count}+</h2>
    <p style={{color:"aqua",fontSize:"20px"}}>{text}</p>
    </div>
     
  );
}

export default Countdown;
