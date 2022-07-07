import React from "react";

function NutritionItem({ itemProp, calories, setCalories, protein, setProtein, carbs, setCarbs, fat, setFat, removeItem }) {

  let [clicked, setClicked] = React.useState(false)

  function isClicked() {
    if (!clicked) {
      setClicked(true)
      itemProp.clicked = true
      setCalories(calories + itemProp.calories)
      setProtein(protein + itemProp.protein)
      setCarbs(carbs + itemProp.carbs)
      setFat(fat + itemProp.fat)

    } else {
      setClicked(false)
      itemProp.clicked = false
      setCalories(calories - itemProp.calories)
      setProtein(protein - itemProp.protein)
      setCarbs(carbs - itemProp.carbs)
      setFat(fat - itemProp.fat)
    }
  }

  function removeInfo() {
    if (itemProp.clicked === true) {
      itemProp.clicked = false
      setCalories(calories - itemProp.calories)
      setProtein(protein - itemProp.protein)
      setCarbs(carbs - itemProp.carbs)
      setFat(fat - itemProp.fat)     
    }
    return removeItem()
  }
  
  return (
    <div
      className={
        'fooditem ' +
        (clicked ? 'item-active' : 'item-inactive')
      }
      >
        <span className="remove-item" onClick={ () => removeInfo() } aria-label="Remove Label" title="Remove Item">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="Remove item">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        </span>

      <div className="item-name">{itemProp.name}</div>
      <div><p>Calories</p>{itemProp.calories}</div>
      <div><p>Protein</p>{itemProp.protein}</div>
      <div><p>Carbs</p>{itemProp.carbs}</div>
      <div><p>Fat</p>{itemProp.fat}</div>

      <span className="add-item" onClick={() => isClicked()} aria-label={clicked ? 'Remove info' : 'Add info'} title={clicked ? 'Remove info' : 'Add info'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={'add-info ' + (clicked ? 'inactive-info' : '')}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={'remove-info ' + (clicked ? '' : 'inactive-info')}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </span>
    </div>
  )
}

export default NutritionItem;