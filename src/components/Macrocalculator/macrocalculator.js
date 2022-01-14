
import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MacroResults from '../Macroresults/macroresults';
import useStyles from './macrostyles';
import { Typography, CssBaseline, Grid, Container } from '@material-ui/core';
import CalculateIcon from '@mui/icons-material/Calculate';
import { makeStyles, Box, Radio, Button,RadioGroup } from '@material-ui/core';
import { Stack, Paper } from '@mui/material';
import styled from 'styled-components';
import { FormControl } from '@mui/material';
import { FormControlLabel, OutlinedInput, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment'; 
import { useForm, Controller } from "react-hook-form";




function  MacroCalculator() {

const classes = useStyles();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
 // const user = useSelector((store) => store.user);

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
const [totalCalories, setCalories] = useState('');  // calculated
const [fatGrams, setFats] = useState('');          // calculated
const [carbsGrams, setCarbs] = useState('');        // calculated
const [proteinGrams, setProteins] = useState('');  // calculated



const user = useSelector((store) => store.user);


const updateUser = (proteinGrams, carbsGrams, fatGrams, totalCalories) => {
 // e.preventDefault();
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

} 

  



const handleWeightChange = (e) => {
  dispatch({
    type: 'EDIT_WEIGHT',
    payload: e.target.value
    
  })
 
}



const handleHeightChange = (e) => {
  e.preventDefault();
  dispatch({
    type: 'EDIT_HEIGHT',
    payload: e.target.value
  })
}


const handleAgeChange = (e) => {
  dispatch({
    type: 'EDIT_AGE',
    payload: e.target.value
  })
}

const handleSubmit = (e) => {
  

  //history.push('/macrocalculator');

  const {proteinGrams, carbsGrams, fatGrams, totalCalories} = macroCalculate(weight, goal);
  setProteins(proteinGrams);
  setCarbs(carbsGrams);
  setFats(fatGrams);
  setCalories(totalCalories);  

  console.log('handle submit','protein', proteinGrams,'carbs', carbsGrams, 'fats', fatGrams, 'calories', totalCalories);
  
 updateUser(proteinGrams, carbsGrams, fatGrams, totalCalories);

 //disableGender();
 reiewResults();
 
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
  


const reiewResults = (e) =>  {

  

  history.push("/macroresults");
  

}


 
const [colormale, setColorM] = useState('primary')

function colorChangeM(){
  setColorM('secondary')
  setGender("Male")
}

const [colorfemale, setColorF] = useState('primary')

function colorChangeF(){
  setColorF('secondary')
  setGender("Female")
}

const [colorlosew, setLoseW] = useState('primary')

function colorLoseW(){
  setLoseW('secondary')
  setGoal("Loose Weight")
}

const [colormaintainw, setMaintainW] = useState('primary')

function colorMaintainW(){
  setMaintainW('secondary')
  setGoal("Maintain Weight")
}

const [colorgainw, setGainW] = useState('primary')

function colorGainW(){
  setGainW('secondary')
  setGoal("Gain Weight")
}



/* function disableLW(){
  if ( user.goal === 'Loose Weight') {
    setEnabledLW(true)
    setDisabledMW(true)
  
    
  } 
  if ( user.goal === 'Maintain Weight') {
    setEnabledMW(true)
    setDisabledLW(true)
  
    
  } 
} */



/* function disableGender() {

  if ( user.gender === 'Male') {
  setEnabled(true)

  
} 

if ( user.gender === 'Female') {
  setEnabledF(true)
} else {
  setDisabled(true)
}
 

}    */



/* useEffect(() => setDisabled(!disabled), [enabled]);
useEffect(() => setDisabledF(!disabledF), [enabledF]);
  */

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
             
       <div className={classes.container}>      
        
        

        <Grid item xs={12} container alignItems="center" justifyContent="center" direction="column">
           <Grid item xs={6} container alignItems="center" justifyContent="center">
           
        
        <Grid item xs={3} >
         <Button   
          variant="contained"
          placeholder="gender"
          value={user.gender}   
          color={colormale}
          style={{ backgroundColor: {colormale}, color: 'white', width: '100%' }}
          onClick={() => colorChangeM()}       
          >Male</Button>
          </Grid>

        <Grid item xs={3}> 
         <Button
          value={user.gender}
          variant="contained"    
          placeholder="gender"
          color={colorfemale}
          style={{ backgroundColor: {colorfemale}, color: 'white', width: '100%' }}
          onClick={() => colorChangeF()}          
          >Female</Button>
         </Grid>
         </Grid>
         </Grid>
         
         <Grid container alignItems="center"  direction="column">
         <Grid item>
         <OutlinedInput
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="weight"
          endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
          value={weight}   
          style={{ width: '100%' }}
          onChange={(e) => setWeight(e.target.value)}
           />
          
         </Grid>
          
          <Grid item>
        
        <OutlinedInput
          variant="outlined"
          size="small"
          type='text' multiline rows={1}
          placeholder="height"
          endAdornment={<InputAdornment position="end">in</InputAdornment>}
          value={height}   
          style={{ width: '100%' }}
          onChange={(e) => setHeight(e.target.value)}
             />
          
          </Grid>

          <Grid item>
             <TextField
              variant="outlined"
              type='text' multiline rows={1}
             placeholder="Age"
             size="small"
            value={age}   
            style={{ width: '100%' }}
           onChange={(e) => setAge(e.target.value)} />
          
          </Grid>
      </Grid>
     
        
        
        <Grid item xs={12} container alignItems="center" justifyContent="center" direction="column">
           <Grid item xs={6} container alignItems="center" justifyContent="center">
        
             <Grid item xs={3} >   
               <FormControlLabel
                value="top"
                control={<Radio name="Activity"
                value="None"
                onChange={(e) => setActivity(e.target.value)} />}
                label="None"
                labelPlacement="top"
                />
               </Grid>
                    
             <Grid item xs={3}>    
              <FormControlLabel
                 value="top"
                 control={<Radio name="Activity"
                 value="Light"
                 onChange={(e) => setActivity(e.target.value)} />}
                 label="Light"
                 labelPlacement="top"
                 />    
                </Grid>

             
             <Grid item xs={3} >    

               <FormControlLabel
                 value="top"
                 control={<Radio name="Activity"
                 value="Moderate"
                 onChange={(e) => setActivity(e.target.value)} />}
                 label="Moderate"
                 labelPlacement="top"
                 />    
              </Grid>

               
            <Grid item xs={3} >  
            <FormControlLabel
                 value="top"
                 control={<Radio name="Activity"
                 value="Active"
                 onChange={(e) => setActivity(e.target.value)} />}
                 label="Active"
                 labelPlacement="top"
                 />    
              </Grid>
          </Grid>
        
       <Grid item xs={6} container alignItems="center" justifyContent="center" direction="column">  
        
          <Grid item xs={6} >   
             <Button
              variant="contained"      
              color={colorlosew}
              style={{ backgroundColor: {colorlosew}, color: 'white', width: '100%' }}
              name="Goal"
              value={user.goal}
              onClick={() => colorLoseW()}       
              >Lose Weight </Button>
           </Grid>
          <Grid item xs={6} >   
            <Button
              variant="contained"
              color={colormaintainw}
              style={{ backgroundColor: {colormaintainw}, color: 'white', width: '100%' }}
              name="Goal"
              onClick={() => colorMaintainW()}
              value={user.goal}
              >Maintain Weight </Button>
            </Grid>
          <Grid item xs={6} >   
            <Button
              variant="contained"
              color={colorgainw}
              style={{ backgroundColor: {colorgainw}, color: 'white', width: '100%' }}
              name="Goal"
              value="Gain Weight"
              onClick={() => colorGainW()}
              >Gain Weight </Button>
              </Grid>

</Grid>
</Grid>         <br></br>

      
      
        


        <Grid container spacing={4} justifyContent="center">
         <Grid item >

          <Button variant="outlined" onClick={(e) => { handleSubmit(e) }}>Calculate</Button> 
          
          
        </Grid>
        </Grid>
           
       
          
          
        </div>          
  
  </div>
    
  );
}

// this allows us to use <App /> in index.js
export default MacroCalculator;
