import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import data from "./data/recipes.js";
import Card from "./components/card.jsx";
import "./styles/main.css";

function App() {
  const { results } = data;
  return (
    <>
      <aside>
        <Welcome />
        <Navbar />
      </aside>
      <main>
        {results.map((recipe) => {
          return <Card key={recipe.id} recipe={recipe} />;
        })}
      </main>
    </>
  );
}

export default App;
