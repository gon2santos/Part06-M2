import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
  if (props.cities.length > 0) {
    console.log(props);
    return (
      <div className={styles.cardsStyle}>
        {props.cities.map((city) => (
          <Card key={city.key} max={city.max} min={city.min} name={city.name} img={city.img} onClose={city.onClose} />
        ))}
      </div>
    )
  } else {
    return (
      <div>Sin Ciudades!</div>
    )
  }
};