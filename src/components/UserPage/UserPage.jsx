import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import UserPageStyle from './UserPageStyle.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

//*Create state for calculator variables
//*Create form and check to see if state is being entered properly as an object
//*Perform calculations, saga store
//*Update Database

const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [activity, setActivity] = useState('');
const [goal, setGoal] = useState('');
const [calories, setCalories] = useState('');  // calculated
const [fats, setFats] = useState('');          // calculated
const [carbs, setCarbs] = useState('');        // calculated
const [proteins, setProteins] = useState('');  // calculated

function macroCalculate(weight, goal) {
var totalCalories;
var proteinGrams;
var carbsGrams;
var fatGrams;

  if ( goal === "Loose Weight" ) {
    console.log('in GOAL', goal);
    totalCalories = weight * 11;
    proteinGrams = Math.round((totalCalories / 2 / 4) * 10) / 10;
    carbsGrams = Math.round((totalCalories / 4 / 4) * 10) / 10;
    fatGrams = Math.round((totalCalories / 4 / 9) * 10) / 10;
  }

  if ( goal === "Maintain Weight" ) {
    totalCalories = weight * 11;
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
  }

  if ( goal === "Gain Weight" ) {
    totalCalories = weight * 11;
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
  }

  return {
    proteinGrams,
    carbsGrams,
    fatGrams
  };

}

/* const updateUser = (e) => {
//*dispatch UPDATE_USER

} */

function handleSubmit(e){
  e.preventDefault();
  const {proteinGrams, carbsGrams, fatGrams} = macroCalculate(weight, goal);
  setProteins(proteinGrams);
  setCarbs(carbsGrams);
  setFats(fatGrams);

  console.log(proteinGrams, carbsGrams, fatGrams, weight);
}

  return (    
    

      <div>
        <form className="Form">
         <input
          type="button"
          placeholder="gender"
          value='Male'
          onClick={(e) => setGender(e.target.value)}/><br></br>
           <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Current Weight"
              value={weight}
              className="Form_weight"
              onChange={(e) => setWeight(parseInt(e.target.value))}
            /><br></br>
          
          <label className="Form_radio">
            <input
              type="radio"
              name="Goal"
              value="Loose Weight"
              className="Form_input"
              onChange={(e) => setGoal(e.target.value)}
            />
             <span className="Form__span">Loose Weight</span>
          </label>
          <label className="Form_radio">
            <input
              type="radio"
              name="Goal"
              value="Maintain Weight"
              className="Form_input"
              onChange={(e) => setGoal(e.target.value)}
            />
             <span className="Form__span">Maintain Weight</span>
          </label>
          <label className="Form_radio">
            <input
              type="radio"
              name="Goal"
              value="Gain Weight"
              className="Form_input"
              onChange={(e) => setGoal(e.target.value)}
            />
             <span className="Form__span">Gain Weight</span>
          </label>
          <button onClick={(e) => { handleSubmit(e) }}>Calculate</button> 
          {proteins > 0 && (
            <div className="Result">
              <p>Protein: {proteins}g</p>
              <p>Carbs: {carbs}g</p>
              <p>Fat: {fats}g</p>
            </div>
          )}
        </form>

    
  </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
