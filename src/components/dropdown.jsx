const Dropdown = ({ data, id }) => {
  console.log(data);
  return (
    <div
      className="dropdown-container"
      key={data[0].root_tag_type + id.toString()}
    >
      <div className="dropdown-heading">
        <h4>{data[0].root_tag_type}</h4>
      </div>
      <div>
        {data.map((tag) => {
          return (
            <div key={tag.id}>
              <h5>{tag.display_name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
