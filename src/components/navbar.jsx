import { useState } from "react";
import tags from "../data/tags";
import Dropdown from "./dropdown";
import { rootTags, filterTags } from "./utils/tags/filteringTags";

const Navbar = () => {
  const [recipe, setRecipe] = useState(null);
  const [modal, setModal] = useState(false)

  const { results } = tags;
  const roots = rootTags(results);
  const sortedTags = filterTags(results, roots);




  return (
    <>
      <nav id="nav-container">
        <div id="form-container">
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        </div>
        <div id="tags-container">
          {sortedTags.map((element, index) => {
            return <Dropdown recipe={element} id={index} key={index} onClose={()=>{}} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
