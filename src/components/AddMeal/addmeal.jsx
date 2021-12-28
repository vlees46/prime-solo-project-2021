
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import reviewmeal from '../ReviewMeal/reviewmeal';
//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function addmeal() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [mealtime, setMealTime] = useState('')
  const [description, setDescription] = useState('')
  const [calories, setcalories] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fats, setFats] = useState('')
  const [goal, setGoal] = useState('')
 
  console.log(mealtime, description, calories, protein, carbs, fats, goal);

const addMeals = (e) => {
//e.preventDefault();
  dispatch({
    type: 'CREATE_MEAL',
    payload: {
      mealtime: mealtime,
      description:  description,
      calories: calories,
      protein: protein,
      carbs: carbs,
      fats: fats,
      goal: goal
    }

  })

  setMealTime('');
  setDescription('');
  setcalories('');
  setCarbs('');
  setProtein('');
  setFats('');
  setGoal('');
  
}

const nextpage = (e) =>  {
  history.push('/reviewmeal');

}

  return (
    <div className="container">
      <p>Add Meal Page</p>
      <form>
      
        <input 
          type="radio"
          name="Mealtime"
          placeholder="Mealtime"
          value='Breakfast'
          onChange={(e) => setMealTime(e.target.value)}
          />Breakfast
         
        <input 
          type="radio"
          placeholder="Mealtime"
          value="Lunch"
          onChange={(e) => setMealTime(e.target.value)}/>Lunch

        <input 
          type="radio"
          placeholder="Mealtime"
          value="Dinner"
          onChange={(e) => setMealTime(e.target.value)}/>Dinner
          <br></br>

        <input
          type="text"
          placeholder="Meal Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>Description
          <br></br>

        <input
          type="number"
          placeholder="calories"
          value={calories}
          onChange={(e) => setcalories(e.target.value)}/>Calories<br></br>

        <input
          type="number"
          placeholder="protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}/> Protein <br></br>
        <input
          type="number"
          placeholder="carbs"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}/> Carbs <br></br>

         <input
          type="number"
          placeholder="fats"
          value={fats}
          onChange={(e) => setFats(e.target.value)}/> Fats <br></br>
          <label>Goal</label> <br></br>
        <input
          type="button"
          placeholder="goal"
          value='Loose Weight'
          onClick={(e) => setGoal(e.target.value)}/>
        <input
          type="button"
          placeholder="goal"
          value='Maintain Weight'
          onClick={(e) => setGoal(e.target.value)}/>
        <input
          type="button"
          placeholder="goal"
          value='Gain Weight'
          onClick={(e) => setGoal(e.target.value)}/><br></br>

      <button onClick={(e) => { addMeals(e) }}>Add</button> 
      <button onClick={(e) => { nextpage(e) }}>Review Meal</button>
      </form>
    </div>
  );
  
}

export default addmeal;
