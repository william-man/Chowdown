const Dropdown = ({ data, id }) => {
  return (
    <div className="dropdown-container" key={data[0].root_tag_type}>
      <div className="dropdown-heading">
        <h4>{data[0].root_tag_type}</h4>
      </div>
      <div>
        {data.map((tag) => {
          return (
            <div key={tag.display_name}>
              <h5>{tag.display_name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
