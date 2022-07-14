import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}


    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <div>Titulo: {this.props.movie.Title}</div>
                <div><img src={this.props.movie.Poster} alt="Movie Poster"></img></div>
                <div>Año: {this.props.movie.Year}</div>
                <div>Plot: {this.props.movie.Plot}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    }
}



export default connect(mapStateToProps, {getMovieDetail})(Movie);