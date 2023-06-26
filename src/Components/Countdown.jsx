import React, { useState, useEffect } from 'react';
import './Countdown.css'

function Countdown({ target,text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [count, target]);

  return (
    <div className='timer'>
    <h2 style={{color:"darkblue"}}>{count}+</h2>
    <p style={{color:"blue",fontSize:"20px"}}>{text}</p>
    </div>
     
  );
}

export default Countdown;
