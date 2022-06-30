import React, {useState } from 'react';
import NutritionItem from "../components/NutritionCalculator/NutritionItem";
import AddItem from "../components/NutritionCalculator/AddItem";
//import styled from "styled-components";

function Nutrition() {
  let [totalCalories, setTotalCalories] = useState(0);
  let [totalProtein, setTotalProtein] = useState(0);
  let [totalCarbs, setTotalCarbs] = useState(0);
  let [totalFat, setTotalFat] = useState(0);

  let [addName, setAddName] = useState('');
  let [addCalories, setAddCalories] = useState('');
  let [addProtein, setAddProtein] = useState('');
  let [addCarbs, setAddCarbs] = useState('');
  let [addFat, setAddFat] = useState('');

  let [items, setItems] = useState([
    {
      name: 'Apple',
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      clicked: false,
      id: Math.floor(Math.random() * 1000000000)
    },
    {
      name: 'Chicken Breast',
      calories: 284,
      protein: 53.4,
      carbs: 0,
      fat: 6.2,
      clicked: false,
      id: Math.floor(Math.random() * 1000000000)
    }
  ]);

  function addNutritionalItem(e) {
    e.preventDefault()
    if (
      addName.length >= 1 && 
      addCalories !== '' &&
      addProtein.length !== '' &&
      addCarbs.length !== '' &&
      addFat.length !== ''
    ) {
      items.push({
        name: addName,
        calories: addCalories,
        protein: addProtein,
        carbs: addCarbs,
        fat: addFat,
        clicked: false,
        id: Math.floor(Math.random() * 1000000000)
      })
      setAddName('')
      setAddCalories('')
      setAddProtein('')
      setAddCarbs('')
      setAddFat('')
    }
  }

  function removeNutritionalItem(removeItem) {
    setItems(items.filter(item => item.id !== removeItem))
  }

  return (
    <main>

      <h1>Nutrition Calculator</h1>

      <div id="info">
        <div><span title="Calories (g)">Calories</span></div>
        <div><span title="Protein (g)">Protein</span></div>
        <div><span title="Carbohydrates (g)">Carbs</span></div>
        <div><span title="Fat (g)">Fat</span></div>
      </div>

      <div id="total">
        <ul>
          <li>Total</li>
          <li>{totalCalories}</li>
          <li>{totalProtein}</li>
          <li>{totalCarbs}</li>
          <li>{totalFat}</li>
        </ul>
      </div>

      <div id="items">
        { items.length >= 1 ?
            items.map(item => (
              <NutritionItem
                key={item.id}
                itemProp={item}
                calories={totalCalories}
                setCalories={setTotalCalories}
                protein={totalProtein}
                setProtein={setTotalProtein}
                carbs={totalCarbs}
                setCarbs={setTotalCarbs}
                fat={totalFat}
                setFat={setTotalFat}
                removeItem={() => removeNutritionalItem(item.id)}
              />
            ))
          : <div className="empty-items">Add an item to the nutrition calculator.</div>
        }
      </div>

      <AddItem
        addItem={addNutritionalItem}
        name={addName}
        updateName={(e) => setAddName(e.target.value)}
        calories={addCalories}
        updateCalories={(e) => setAddCalories(parseFloat(e.target.value))}
        protein={addProtein}
        updateProtein={(e) => setAddProtein(parseFloat(e.target.value))}
        carbs={addCarbs}
        updateCarbs={(e) => setAddCarbs(parseFloat(e.target.value))}
        fat={addFat}
        updateFat={(e) => setAddFat(parseFloat(e.target.value))}
      />
    </main>
  );
}

export default Nutrition;