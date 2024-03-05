import tags from "../data/tags";
import Dropdown from "./dropdown";

const results = tags.results;

const Navbar = () => {
  return (
    <>
      <nav id="nav-container">
        <div id="form-container">
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        </div>
        <div id="tags-container"></div>
      </nav>
    </>
  );
};

export default Navbar;
