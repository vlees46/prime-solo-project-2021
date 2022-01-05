import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MacroResults from '../Macroresults/macroresults';
import useStyles from './macrostyles';
import Button from "@material-ui/core/Button";
import { Box } from '@material-ui/core';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import CalculateIcon from '@mui/icons-material/Calculate';
import { makeStyles } from '@material-ui/core';


function  MacroCalculator() {

const classes = useStyles();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

//*Create state for calculator variables  -- DONE
//*Create form and check to see if state is being entered properly as an object - DONE
//*Perform calculations, almost done, but need to do some corrections
//*SAGAS - Reducers
//*Update Database

const dispatch = useDispatch();
const history = useHistory();

const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [activity, setActivity] = useState('');
const [goal, setGoal] = useState('');
const [totalCalories, setCalories] = useState('0');  // calculated
const [fatGrams, setFats] = useState('0');          // calculated
const [carbsGrams, setCarbs] = useState('0');        // calculated
const [proteinGrams, setProteins] = useState('0');  // calculated

const updateUser = (proteinGrams, carbsGrams, fatGrams, totalCalories) => {
  console.log('reducers set', proteinGrams, carbsGrams, fatGrams, totalCalories);
  dispatch({
    type: 'UPDATE_USER',
    payload: {
      gender: gender,
      age: age,
      weight: weight,
      height: height,
      activity: activity,
      goal: goal,    
      calories: totalCalories,
      fats: fatGrams,
      proteins: proteinGrams,
      carbs: carbsGrams         
    }

  })
setGender('');
setAge('');
setWeight('');
setHeight('');
setActivity('');
setGoal('');
setCalories('');
setFats('');
setProteins('');
setCarbs('');
} 


function macroCalculate(weight, goal) {
let totalCalories;
let proteinGrams;
let carbsGrams;
var fatGrams;

const heightCm = height * 2.54;
const weightKg = weight * .45;
const totalWeight = weightKg * 10;
const totalHeight = heightCm * 6.25;
const totalAge = age * 5;

  if (gender === "Male") {
   if ( goal === "Loose Weight" ) {
    
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    
    proteinGrams = Math.round((totalCalories / 2 / 4) * 10) / 10;
    carbsGrams = Math.round((totalCalories / 4 / 4) * 10) / 10;
    fatGrams = Math.round((totalCalories / 4 / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  }

  if ( goal === "Maintain Weight" ) {
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  }

  if ( goal === "Gain Weight" ) {
    totalCalories = (totalWeight + totalHeight) - totalAge + 5;
    
    proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
    carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
    fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
    console.log('in MALE GOAL', goal, heightCm, weightKg, totalCalories);
  } 
}

  if (gender === "Female"){
    if ( goal === "Loose Weight" ) {
    
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
      
      proteinGrams = Math.round((totalCalories / 2 / 4) * 10) / 10;
      carbsGrams = Math.round((totalCalories / 4 / 4) * 10) / 10;
      fatGrams = Math.round((totalCalories / 4 / 9) * 10) / 10;
      console.log('in FEMALE GOAL', goal, heightCm, weightKg, totalCalories);
    }
  
    if ( goal === "Maintain Weight" ) {
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
      
      proteinGrams = Math.round(((totalCalories * .4) / 4) * 10) / 10;
      carbsGrams = Math.round(((totalCalories * .3) / 4) * 10) / 10;
      fatGrams = Math.round(((totalCalories * .3) / 9) * 10) / 10;
      console.log('in FEMALE GOAL', goal, heightCm, weightKg, totalCalories);
    }
  
    if ( goal === "Gain Weight" ) {
      totalCalories = (totalWeight + totalHeight) - totalAge - 161;
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
  



function handleSubmit(e){
// e.preventDefault();
  const {proteinGrams, carbsGrams, fatGrams, totalCalories} = macroCalculate(weight, goal);
  setProteins(proteinGrams);
  setCarbs(carbsGrams);
  setFats(fatGrams);
  setCalories(totalCalories);  
  console.log('handle submit','protein', proteinGrams,'carbs', carbsGrams, 'fats', fatGrams, 'calories', totalCalories);
  
 updateUser(proteinGrams, carbsGrams, fatGrams, totalCalories);
}

const reiewResults = (e) =>  {
  history.push('/macroresults');

}

  return (    
    

      <div className={classes.container}>
        
        <main>
            <div>
                <Container maxWidth="sm">
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                    Macro Calculator
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Welcome, {user.username}!
                  </Typography>
                </Container>
            </div>
        </main>
             
                 
        <CssBaseline />
        
        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5} >
         <Button
          variant="contained"
      
          placeholder="gender"
          value='Male'
          onClick={() => {setGender("Male")}} 
          color="primary">Male</Button>
        </Grid>

        <Grid item xs={5} >
          <Button
          variant="contained"
        
          placeholder="gender"
          value='Female'
          onClick={() => setGender("Female")}
          color="primary">Female</Button><br></br>
         </Grid>

         <Grid item xs={5} >
          <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Current Weight"
              value={weight}          
              onChange={(e) => setWeight(e.target.value)}
            />
        </Grid>


          <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={age}              
              onChange={(e) => setAge(e.target.value)}
            />  
        

<Grid item xs={5} >    
             <input
              type="number"
              id="height"
              name="height"
              placeholder="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />      
          </Grid>

        </Grid>
        
        <Grid container spacing={4} justifyContent="center">
        <span className="Form__span">Activity Level</span><br></br>
        <Grid item >
             
      
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


          <Button
              variant="contained"
              align="center"
              name="Goal"
              value="Loose Weight"
              className="Form_weight"
              onClick={() => setGoal("Loose Weight")}       
              color="primary">Loose Weight </Button>
          <Button
              variant="contained"
              align="center"              
              name="Goal"
              onClick={() => setGoal("Maintain Weight")}
              value="Maintain Weight"
              color="primary">Maintain Weight </Button>
            
            <Button
              variant="contained"
              align="center"      
              name="Goal"
              value="Gain Weight"
              className="Form_weight"
              onClick={() => setGoal("Gain Weight")}
              color="primary">Gain Weight </Button>

        
            

        </Grid>
        </Grid>


        <Grid container spacing={4} justifyContent="center">
         <Grid item >

          <button variant="outlined" onClick={(e) => { handleSubmit(e) }}>Calculate</button> 
          <button variant="outlined" onClick={(e) => { reiewResults(e) }}>Results</button>
          
        </Grid>
        </Grid>       
       
          
          
          
  
  </div>
    
  );
}

// this allows us to use <App /> in index.js
export default MacroCalculator;
