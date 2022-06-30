import React from "react";

function AddItem({ addItem, name, updateName, calories, updateCalories, protein, updateProtein, carbs, updateCarbs, fat, updateFat }) {
  return (
    <form onSubmit={addItem}>
      <div className="form-inner">

        <div className="form-input">
          <input id="name" type="text" placeholder="Name"
          value={name} onChange={updateName} />
        </div>

        <div className="form-input">
          <input id="calories" type="number" placeholder="Calories"
          value={calories} onChange={updateCalories} step="0.01" />
        </div>

        <div className="form-input">
          <input id="protein" type="number" placeholder="Protein"
          value={protein} onChange={updateProtein} step="0.01" />
        </div>

        <div className="form-input">
          <input id="carbs" type="number" placeholder="Carbs"
          value={carbs} onChange={updateCarbs} step="0.01" />
        </div>

        <div className="form-input">
          <input id="fat" type="number" placeholder="Fat"
          value={fat} onChange={updateFat} step="0.01" />
        </div>
        
      </div>
      <input
        type="submit"
        value="Add Item"
      />
    </form>
  )
};
export default AddItem;