

const Dropdown = ({ key, tags }) => {
  return (
    <div className="dropdown-container" key={key}>
      <div className="dropdown-heading">
        <h4>{tags.root_tag_type}</h4>
      </div>
      <div>
        {tags.map((tag) => {
          <div>{tag.display_name}</div>;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
