import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import "./styles/main.css";

function App() {
  return (
    <>
      <aside>
        <Welcome />
        <Navbar />
      </aside>
      <main>Hello World</main>
    </>
  );
}

export default App;
