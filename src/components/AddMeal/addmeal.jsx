
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import reviewmeal from '../ReviewMeal/reviewmeal';
import { Button, TextField, Grid, Box, Radio, OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';  

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
      
      <form>
        
      <Grid container direction="row" alignItems="center" justifyContent="center"><br></br>
        
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
        
        <Grid container direction="column" alignItems="center" justifyContent="center">
        <TextField
          variant="outlined"
          type='text' multiline rows={2}
          placeholder="Meal Description"
          style={{ width: '50%' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
          
          <TextField
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="calories"
        
          value={calories}
          onChange={(e) => setcalories(e.target.value)}/> 

        <OutlinedInput
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="protein"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          value={protein}
          onChange={(e) => setProtein(e.target.value)}/>

        <OutlinedInput
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="carbs"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}/>

        <OutlinedInput
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="fats"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          value={fats}
          onChange={(e) => setFats(e.target.value)}/><br></br> 
         
          <h2>Goal</h2> <br></br>
        </Grid>
        <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    placeholder="goal"
                    value='Loose Weight'
                    style={{ backgroundColor: '#a1b26a', color: 'white' }}
                    onClick={(e) => setGoal(e.target.value)}
                    
                >
                    Lose Weight
                </Button>

                <Button
                    variant="contained"
                    placeholder="goal"
                    value='Maintain Weight'
                    style={{ backgroundColor: '', color: 'White' }}
                    onClick={(e) => setGoal(e.target.value)}

              
                >
                    Maintain Weight
                </Button>

                <Button
                    variant="contained"
                    placeholder="goal"
                    value='Gain Weight'
                    style={{ backgroundColor: '', color: 'White' }}
                    onClick={(e) => setGoal(e.target.value)}

              
                >
                    Gain Weight
                </Button>
               ><br></br>
            </Grid>
            <br></br>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
               <Button
               variant="contained"
               style={{ backgroundColor: '', color: 'White' }}               
               onClick={(e) => { addMeals(e) }}>Add</Button> 


              <Button
               variant="contained"
               style={{ backgroundColor: '', color: 'White' }}               
               onClick={(e) => { nextpage(e) }}>Review Meal</Button> 
              </Grid>    

      </form>
    </div>
  );
  
}

export default addmeal;
