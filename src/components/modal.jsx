/*
This is the modal component that displays all the relevant data for a recipe.
*/

const Modal = ({ recipe, onClose }) => {
  const {
    //thumbnail_url,
    name,
    description,
    total_time_tier,
    yields,
    original_video_url,
    sections,
    instructions,
    nutrition,
  } = recipe;

  // This function maps the array inside sections to display the ingredients.
  const ingredientList = () => {
    return (
      <ul>
        {sections[0].components.map((item) => {
          return <li key={item.id}>{item.raw_text}</li>;
        })}
      </ul>
    );
  };

  // This function maps the array inside instructions to display the instructions.
  const instructionList = () => {
    return (
      <ol>
        {instructions.map((step) => {
          return <li key={step.id}>{step.display_text}</li>;
        })}
      </ol>
    );
  };

  //This filter is to remove the "updated_at" property while data for the nutrition is mapped.
  const filterKeys = (key) => {
    return key !== "updated_at";
  };

  // This function maps the data for the nutritional information.
  const nutritionList = () => {
    return (
      <ul>
        {Object.keys(nutrition)
          .filter(filterKeys)
          .map((key) => {
            return (
              <li key={key}>
                {key}: {nutrition[key]}
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <div className="recipe-container" onClick={onClose}>
      <article className="recipe-modal">
        {/*
        Close button
        */}
        <div className="recipe-modal__close">
          <div onClick={onClose}>
            <bold>X</bold>
          </div>
        </div>
        {/*
        embedded video
        */}
        <div className="recipe-modal__video">
          {original_video_url && (
            <video src={original_video_url} controls></video>
          )}
        </div>
        {/*
        title
        */}
        <div className="recipe-modal__name">
          <h2>{name}</h2>
        </div>
        {/*
        description
        */}
        <div className="recipe-modal__description">
          <p>{description}</p>
        </div>
        {/*
        difficulty tier
        */}
        {total_time_tier?.display_tier && (
          <div className="recipe-modal__difficulty">
            <p>Difficulty: {total_time_tier?.display_tier}</p>
            {/* ternary function to check if data exists*/}
            {/* The "?." operator is there to check if the property exists.*/}
          </div>
        )}
        {/*
        amount of servings
        */}
        {yields && (
          <div className=".recipe-modal__yield">
            <p>{yields}</p>
          </div>
        )}
        {/*
        ingredients list
        */}
        <div className="recipe-modal__ingredients">
          <h3>Ingredients:</h3>
          {ingredientList()}
        </div>
        {/*
        nutritional information
        */}
        <div className="recipe-modal__nutrition">
          <h3>Nutrition</h3>
          {nutritionList()}
        </div>
        {/*
        instructions
        */}
        <div className="recipe-modal__instructions">{instructionList()}</div>
      </article>
    </div>
  );
};

export default Modal;
