import { useState, useEffect } from "react";
import './Clock.css';

const Clock = ({country, timezone})=>{
    const t = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(t);
    const [date, setDate] = useState(dateIni);
    const [nation, setNation] = useState(country);

    const [firstSecond, setFirstSecond] = useState(0);
    const [secondSecond, setSecondSecond] = useState(0);
    const [firstMinute, setFirstMinute] = useState(0);
    const [secondMinute, setSecondMinute] = useState(0);
    const [firstHour, setFirstHour] = useState(0);
    const [secondHour, setSecondHour] = useState(0);

    const [firstSecondMove, setFirstSecondMove] = useState('');

    useEffect(() => {
       const interval = setInterval(() => {
           const time = date.getTime() + 1000;
           const d = new Date(time);
           // secs
           const secs = d.getSeconds().toString().padStart(2,'0');
           setFirstSecond(secs.charAt(0));
           if (secondSecond !== secs.charAt(1)){
           setSecondSecond(secs.charAt(1));
        //    setFirstSecondMove('move');
            };
           // min
           const mins = d.getMinutes().toString().padStart(2,'0');
           setFirstMinute(mins.charAt(0));
           if( secondMinute !== mins.charAt(1)){
           setSecondMinute(mins.charAt(1));
           };
           // hour
           const hours = d.getHours().toString().padStart(2,'0');
           setFirstHour(hours.charAt(0));
           if (secondHour !== hours.charAt(1)){
           setSecondHour(hours.charAt(1));
           };
           setDate(d);
       }, 1000);
    return () => {
        clearInterval(interval);
    };
    },[date]);

    return (
    <>
    
    <h2>In {nation} is: { date.toLocaleDateString() + " " + new Date().toLocaleTimeString() } </h2>
    <br/>
    
    <div className="clock">
  <div className="hours">
    <div className="first">
      <div className="number">{firstHour}</div>
    </div>
    <div className="second">
      <div className="number">{secondHour}</div>
    </div>
  </div>
  <div className="tick">:</div>
  <div className="minutes">
    <div className="first">
      <div className="number">{firstMinute}</div>
    </div>
    <div className="second">
      <div className="number">{secondMinute}</div>
    </div>
  </div>
  <div className="tick">:</div>
  <div className="seconds">
    <div className="first">
      <div className={"number "}>{firstSecond}</div>
    </div>
    <div className="second infinite">
      <div className="number">{secondSecond}</div>
    </div>
  </div>
</div>
</>)
}
export default Clock;