import React from "react";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>Director: {director}</h3>
      <h3>Metascore: {metascore}</h3>
      <h3>Actors</h3>
      {stars.map(star => (
        <p key={star} className="movie-star">
          {star}
        </p>
      ))}
      ;
    </div>
  );
};

export default MovieCard;
