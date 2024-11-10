import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [seconds, setSeconds] = useState(3658);
  const [hours,setHours]=useState(0)
  const [mins,setMins]=useState(0)
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } 
    return () => clearInterval(interval);
  }, [isActive]);
  const toggle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };
  return (
    <div className="timer">
      <div className="time">
        {Math.floor(seconds/3600)}:{Math.floor((seconds%3600)/60)}:{seconds%60}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;