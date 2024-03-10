import { useState } from "react";

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
      onClick={toggleDropDown}
    >
      <div className="dropdown-heading">
        <h4>{data[0].root_tag_type}</h4>
      </div>
      <div>
        {data.map((tag) => {
          if (show) {
            return (
              <div key={tag.display_name}>
                <h5>{tag.display_name}</h5>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Dropdown;
