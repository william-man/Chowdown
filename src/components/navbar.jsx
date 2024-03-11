import tags from "../data/tags";
import Dropdown from "./dropdown";
import { rootTags, filterTags } from "./utils/tags/filteringTags";

const Navbar = () => {
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
            return <Dropdown data={element} id={index} key={index} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
