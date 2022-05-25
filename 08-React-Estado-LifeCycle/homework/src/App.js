import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import Cards from './components/Cards.jsx';



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      arrCiudades: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose(id){
    this.setState(prevState => ({arrCiudades: prevState.arrCiudades.filter(c => c.key !== id)}) );
    console.log("Sacar tarjeta con id: " + id);
  }

  onSearch(ciudad, apiKey = "4ae2636d8dfbdc3044bede63951a019b") {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const newCard = {
            key: recurso.id,
            max: Math.round(recurso.main.temp_max),
            min: Math.round(recurso.main.temp_min),
            name: recurso.name,
            img: recurso.weather[0].icon,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            onClose: () => this.onClose(recurso.id)
          };

          this.setState(prevState => ({ arrCiudades: [...prevState.arrCiudades, newCard] }));
        } else {
          alert("Ciudad no encontrada");
        }
      });



    console.log("Serached for: " + ciudad);
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <Cards cities={this.state.arrCiudades} />
      </div>

    );
  }

}
