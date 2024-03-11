import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import data from "./data/recipes.js";
import Card from "./components/card.jsx";
import "./styles/main.css";
import { useState } from "react";
import Modal from "./components/modal.jsx";

function App() {
  const { results } = data;
  const [modal, setModal] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState(null);

  const showModal = (recipe) => {
    setChosenRecipe(recipe);
    setModal(true);
    console.log(modal);
  };

  const hideModal = () => {
    setChosenRecipe(null);
    setModal(false);
  };

  return (
    <>
      <aside>
        <Welcome />
        <Navbar />
      </aside>
      <main>
        <div className="card-container">
          {results.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              onClick={() => showModal(recipe)}
            />
          ))}
        </div>

        {modal === true && <Modal recipe={chosenRecipe} onClose={hideModal} />}
      </main>
    </>
  );
}

export default App;
