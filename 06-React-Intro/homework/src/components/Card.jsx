import React from 'react';
import Temp from './Temp';

export default function Card({max,min,name,img,onClose}) {

  return <div>
    <span id='cityname'>{name}</span>
    <button onClick={onClose} id='xbutton'>X</button>
    <Temp label='Min' value={min}/>
    <Temp label='Max' value={max}/>

      <div id='icon_weather'><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather_icon" /></div>
  </div>

};