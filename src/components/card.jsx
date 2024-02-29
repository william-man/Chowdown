import React from "react";

const Card = ({ recipe }) => {
  return (
    <div id="card-container">
      <img src={recipe.thumbnail_url} alt={recipe.slug} />
      <h3>{recipe.name}</h3>
    </div>
  );
};

export default Card;
