
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import usermeals from '../UserMeals/usermeals';



//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function macrodetails() {
  const dispatch = useDispatch();
  const history = useHistory();

 const user = useSelector((store) => store.user);
console.log('macroresults test USER REDUCER', user);


  
const backpage = (e) =>  {
    history.push('/macrocalculator');
  
  }

  const usermeals = (e) =>  {
    history.push('/usermeals');
  
  }  
  
 useEffect(() => {
      dispatch({ type: 'GET_UPDATE' });
  }, []);
  
 function bmiCalc(){
     
    const weightKg = user.weight * .45;
    const heightCm = user.height * 2.54;

     let bmi = Math.round((weightKg/ heightCm / heightCm) * 10000);
     console.log('calculating bmi', bmi, 'user weight kg', user.weight)
     return bmi;
 }

  let bmi =  bmiCalc();
  console.log('thisi s the bmi', bmi)
  console.log('user activity level is', user.activity)
  bmiCalc();


  function dailyexpenditure(){
    

      if (user.activity === "None") {
          let tdee = user.calories * 1.0;
          console.log(' in activity NONE', tdee);
          return tdee
          
      }
      
         if (user.activity === "Light") {
          let tdee = user.calories * 1.2;
          console.log(' in activity LIGHT', tdee);
          return tdee

          }
             if (user.activity === "Moderate") {
                let tdee = user.calories * 1.4;
               console.log(' in activity MODERATE', tdee);
               return tdee
              }
                 if (user.activity === "Active") {
                   let tdee = user.calories * 1.8;
                   console.log(' in activity  ACTIVE', tdee);
                   return tdee
                     }
  }
  
  let tdee = Math.round(dailyexpenditure());
  dailyexpenditure();

  return (
    <div>
       
        <h1> Macro Results</h1>
        <span className="Form__span">Total Calories</span><br></br>
        <input
              type="text"
              id="calories"
              name="calories"
              placeholder="calories results"
              value={user.calories}
              className="Form_weight"

            /><br></br>
            <span className="Form__span">Carbs</span><br></br>
            <input
              type="text"
              id="carbs"
              name="carbs"
              placeholder="carbs results"
              value={user.carbs}
              className="Form_weight"

            /><br>
            </br>
            <span className="Form__span">Protein</span><br></br>
             <input
              type="text"
              id="protein"
              name="protein"
              placeholder="protein results"
              value={user.proteins}
              className="Form_weight"

            /><br></br>
            <span className="Form__span">Fats</span><br></br>
            <input
              type="text"
              id="fats"
              name="fats"
              placeholder="fats results"
              value={user.fats}
              className="Form_weight"
            /><br></br>      
             
             <span className="Form__span">BMI</span><br></br>
            <input
              type="text"
              id="bmi"
              name="bmi"
              placeholder="bmi results"
              value={bmi}
              className="Form_weight"
            /><br></br>     

<span className="Form__span">Total Daily Energy Expenditure </span><br></br>
            <input
              type="text"
              id="tdee"
              name="tdee"
              placeholder="tdee results"
              value={tdee}
              className="Form_weight"
            /><br></br>     
      

        <button onClick={(e) => { backpage(e) }}>Back</button>
        <button onClick={(e) => { usermeals(e) }}>Meals</button>
      
  </div>
  );
  
}

export default macrodetails;
