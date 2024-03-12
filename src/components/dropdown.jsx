import { useState } from "react";
import { upperCaseTag } from "./utils/tags/rootTagName";

const Dropdown = ({ data, id }) => {
  const [show, setShow] = useState(false);
  const toggleDropDown = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div
      className="dropdown-container"
      key={data[0].root_tag_type + id.toString()}
    >
      <div className="dropdown-heading" onClick={toggleDropDown}>
        <h4>{upperCaseTag(data[0].root_tag_type)}</h4>
      </div>
      <div className="dropdown-tag-container">
        {data.map((tag) => {
          if (show) {
            return (
              <div key={tag.display_name} className="dropdown-tag">
                <p>{tag.display_name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Dropdown;
