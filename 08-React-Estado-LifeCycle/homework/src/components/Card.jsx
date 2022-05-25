import React from 'react';
import Temp from './Temp';
import styles from './Card.module.css'

export default function Card({ max, min, name, img, onClose }) {

  return <div className={styles.cardStyle}>
    <div className={styles.headerStyle}>
      <span className={styles.cityStyle} id='cityname'>{name}</span>
      <button className={styles.buttonStyle} onClick={onClose} id='xbutton'>X</button>
    </div>
    <div className={styles.tempIcon}>
      <div className={styles.temp}>
      <Temp label='Min' value={min} />
      <Temp label='Max' value={max} />
      </div>
      <div id='icon_weather'><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="wicon_NOT_FOUND" /></div>
    </div>
    
  </div>

};