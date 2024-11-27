import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Timer = () =>{
   const [time, setTime] = useState(0);
   const [isRunning, setisRunning] = useState(false);

   function checkTimer(){
      setisRunning(!isRunning)
   }

   function resetTimer() {
      setTime(0)
      setisRunning(false)
   }

   
   useEffect(() => {
      let intervalId ;
      if (isRunning) {
         intervalId = setInterval(() =>{
            setTime(time => time + 1)
         },1000)
      }else{
         clearInterval(intervalId)
      }
      return () => clearInterval(intervalId);
      },[isRunning])


      return(
         <div className="toggle">
            <h2>Timer : {time}</h2>
            <button onClick={checkTimer}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={resetTimer}>Reset</button>
         </div>
      )

   }
export default Timer
   
