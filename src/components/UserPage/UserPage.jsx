import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import UserPageStyle from './UserPageStyle.css';

function UserPage() {


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

//*Create state for calculator variables  -- DONE
//*Create form and check to see if state is being entered properly as an object - DONE
//*Perform calculations, almost done, but need to do some corrections
//*SAGAS - Reducers
//*Update Database

const dispatch = useDispatch();

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

console.log('this is the state',calories, 'protein', proteins,'carbs', carbs, 'fats', fats, 'goal', goal, 'weight', weight,'height', height,'gender', gender, 'age', age, 'activity', activity);


function macroCalculate(weight, goal) {
var totalCalories;
var proteinGrams;
var carbsGrams;
var fatGrams;

const heightCm = height * 2.54;
const weightKg = weight * .45;
const totalWeight = weightKg * 10;
const totalHeight = heightCm * 6.25;
const totalAge = age * 5;

  if (gender === "Male") {
   if ( goal === "Loose Weight" ) {
    
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    setCalories(totalCalories);  
    proteinGrams = Math.round((totalCalories / 2 / 4) * 10) / 10;
    carbsGrams = Math.round((totalCalories / 4 / 4) * 10) / 10;
    fatGrams = Math.round((totalCalories / 4 / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  }

  if ( goal === "Maintain Weight" ) {
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    setCalories(totalCalories);  
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  }

  if ( goal === "Gain Weight" ) {
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    setCalories(totalCalories);  
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  } 
}

  if (gender === "Female"){
    if ( goal === "Loose Weight" ) {
    
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
      setCalories(totalCalories);  
      proteinGrams = Math.round((totalCalories / 2 / 4) * 10) / 10;
      carbsGrams = Math.round((totalCalories / 4 / 4) * 10) / 10;
      fatGrams = Math.round((totalCalories / 4 / 9) * 10) / 10;
      console.log('in FEMALE GOAL', goal, heightCm, weightKg, totalCalories);
    }
  
    if ( goal === "Maintain Weight" ) {
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
      setCalories(totalCalories);  
      proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
      carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
      fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
      console.log('in FEMALE GOAL', goal, heightCm, weightKg, totalCalories);
    }
  
    if ( goal === "Gain Weight" ) {
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
      setCalories(totalCalories);  
      proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
      carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
      fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
      console.log('in FEMALE GOAL', goal, heightCm, weightKg, totalCalories);
    } 

  }
  return {
    proteinGrams,
    carbsGrams,
    fatGrams,
    totalCalories
  };

 }
  

const updateUser = (e) => {
  dispatch({
    type: 'UPDATE_USER',
    payload: {
      gender: gender,
      age: age,
      weight: weight,
      height: height,
      activity: activity,
      goal: goal,    
      calories: calories,
      fats: fats,
      protein: proteins,
      carbs: carbs          
    }

  })

} 

function handleSubmit(e){
 e.preventDefault();
  const {proteinGrams, carbsGrams, fatGrams, totalCalories} = macroCalculate(weight, goal);
  setProteins(proteinGrams);
  setCarbs(carbsGrams);
  setFats(fatGrams);
  setCalories(totalCalories);  
  
 updateUser(e);
}

  return (    
    

      <div>
        <h2>Welcome, {user.username}!</h2>
        <form className="Form">
         <input
          type="button"
          placeholder="gender"
          className="Form_gender"
          value='Male'
          onClick={(e) => setGender(e.target.value)}/>
         <input
          type="button"
          placeholder="gender"
          className="Form_gender"
          value='Female'
          onClick={(e) => setGender(e.target.value)}/><br></br> 
           <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Current Weight"
              value={weight}
              className="Form_weight"
              onChange={(e) => setWeight(parseInt(e.target.value))}
            />
             <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={age}
              className="Form_gender"
              onChange={(e) => setAge(parseInt(e.target.value))}
            /><br></br>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Height"
              value={height}
              className="Form_gender"
              onChange={(e) => setHeight(parseInt(e.target.value))}
            /><br></br>
           <span className="Form__span">Activity Level</span><br></br>
           
            <input
              type="radio"
              name="Activity"
              value="None"
              className="Form_radio"
              onChange={(e) => setActivity(e.target.value)}
            />
          <span className="Form__span">None</span>
          <input
              type="radio"
              name="Activity"
              value="Light"
              className="Form_radio"
              onChange={(e) => setActivity(e.target.value)}
            />
          <span className="Form__span">Light</span> 
          <input
              type="radio"
              name="Activity"
              value="Moderate"
              className="Form_radio"
              onChange={(e) => setActivity(e.target.value)}
            />
          <span className="Form__span">Moderate</span> 

          <input
              type="radio"
              name="Activity"
              value="Active"
              className="Form_radio"
              onChange={(e) => setActivity(e.target.value)}
            />
          <span className="Form__span">Active</span> <br></br>

          <label className="Form_radio">
            <input
              type="button"
              name="Goal"
              value="Loose Weight"
              className="Form_weight"
              onClick={(e) => setGoal(e.target.value)}
            /><br></br>
            
          </label>
          <label className="Form_radio">
            <input
              type="button"
              name="Goal"
              value="Maintain Weight"
              className="Form_weight"
              onClick={(e) => setGoal(e.target.value)}
            /><br></br>
            
          </label>
          <label className="Form_radio">
            <input
              type="button"
              name="Goal"
              value="Gain Weight"
              className="Form_weight"
              onClick={(e) => setGoal(e.target.value)}
            /><br></br>
            
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
