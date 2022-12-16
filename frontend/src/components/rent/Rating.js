import React from "react";

// Finir le système de note...

const Rating = ({ rating }) => {
  // prends en paramètre rating et maxRating
  function stars(rating, maxRating) {
    // Fill l'array de 0
    const stars = new Array(maxRating).fill(0).map((e, i) => {
      // Map l'array, est si index est < à rating, alors
      // On met l'étoile coloré sinon on met la grise
      const path = i < rating ? "./img/stars.svg" : "./img/grey-stars.svg";
      return <img src={path} alt="star" key={i} />;
    });
    return stars;
  }
  console.log(stars({ rating }, 5));

  return <span>{stars(rating, 5)}</span>;
};

export default Rating;
