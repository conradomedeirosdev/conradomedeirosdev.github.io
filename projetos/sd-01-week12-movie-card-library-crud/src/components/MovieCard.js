import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card movie-card">
            <div className="card-image">
              <img
                alt="Movie Cover"
                className="movie-card-image"
                src={imagePath}
              />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{storyline}</p>
            </div>
            <div className="card-action">
              <Link data-test-id={`${title}Details`} to={`/movies/${id}`}>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
