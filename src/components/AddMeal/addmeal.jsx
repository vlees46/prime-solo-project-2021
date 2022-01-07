
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import reviewmeal from '../ReviewMeal/reviewmeal';
import { Typography, CssBaseline, Grid, Container } from '@material-ui/core';
import CalculateIcon from '@mui/icons-material/Calculate';
import { makeStyles, Box, Radio, Button } from '@material-ui/core';
import { Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles'; 
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
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
      <CssBaseline />
      <form>
      <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
        <Radio
          name="Mealtime"
          placeholder="Mealtime"
          value='Breakfast'
          onChange={(e) => setMealTime(e.target.value)}
          />Breakfast
         
        <Radio
          placeholder="Mealtime"
          value="Lunch"
          onChange={(e) => setMealTime(e.target.value)}/>Lunch

        <Radio
          placeholder="Mealtime"
          value="Dinner"
          onChange={(e) => setMealTime(e.target.value)}/>Dinner
          <br></br>
        </Grid>
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
        <input
          type="text"
          placeholder="Meal Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
          

        <input
          type="number"
          placeholder="calories"
          value={calories}
          onChange={(e) => setcalories(e.target.value)}/>

        <input
          type="number"
          placeholder="protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}/>

        <input
          type="number"
          id="carbs"
          placeholder="carbs"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}/>

         <input
          type="number"
          placeholder="fats"
          value={fats}
          onChange={(e) => setFats(e.target.value)}/>
          <label>Goal</label> 
        </Grid>


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
