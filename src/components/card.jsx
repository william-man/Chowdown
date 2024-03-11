import React from "react";

const Card = ({ recipe, onClick }) => {
  return (
    <div id="card-container" onClick={onClick}>
      <img src={recipe.thumbnail_url} alt={recipe.slug} />
      <h3>{recipe.name}</h3>
    </div>
  );
};

export default Card;
