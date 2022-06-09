import React from "react";

export default function Ciudad({ city }) {
    console.log(city.name);
    return (
        <div>
            <h2>Detalles de la ciudad</h2>
            <h3>clouds: {city.clouds}</h3>
            <h3>id:{city.id}</h3>
            <h3>img: {city.img}</h3>
            <h3>latitud: {city.latitud}</h3>
            <h3>longitud:{city.longitud}</h3>
            <h3>max:{city.max}</h3>
            <h3>min:{city.min}</h3>
            <h3>name:{city.name}</h3>
            <h3>temp: {city.temp}</h3>
            <h3>weather: {city.weather}</h3>
            <h3>wind: {city.wind}</h3>
        </div>
    )
}