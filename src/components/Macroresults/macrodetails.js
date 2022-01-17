
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import usermeals from '../UserMeals/usermeals';
import { Button} from '@material-ui/core';
import { Typography, Grid, Container } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import { TextField, Box, Radio, OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment'; 
import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";



//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5,20,0),
      width: theme.spacing(185),
      height: theme.spacing(100)
      
    }
  },
  yellowPaper: {
    backgroundColor: yellow[300]
  },
  customBorder: {
    border: `3px solid ${yellow[200]}`
  },
  customBorderRadius: {
    borderRadius: 25
  }
}));

function macrodetails() {
  const dispatch = useDispatch();
  const history = useHistory();

 
 const user = useSelector((store) => store.user);


 console.log('macro details test  UPDATE REDUCER', user);


  
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
  
  dailyexpenditure();
  let tdee = Math.round(dailyexpenditure());
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
     <Grid  container alignItems="center"  direction="column">
        <Paper elevation={6}>
       
          <Grid  container alignItems="center"  direction="column"><br></br>
          <Typography variant="h4">{user.username}'s Macro Results</Typography><br></br>
          <Typography variant="h5">Total Calories</Typography>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="filled-basic"
          name="calories"
          placeholder="calories results"
          value={user.calories}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
         </Grid><br></br>
      
      <Typography variant="h5">Carbs</Typography><br></br>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="filled-basic"
          name="carbs"
          placeholder="calories results"
          value={user.carbs}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
         </Grid>
         <Typography variant="h5">Protein</Typography><br></br>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="protein"
          name="protein"
          placeholder="protein results"
          value={user.proteins}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
         </Grid>


         <Typography variant="h5">Fats</Typography><br></br>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="fats"
          name="fats"
          placeholder="fats results"
          value={user.fats}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
            </Grid>

        <Typography variant="h5">BMI</Typography><br></br>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="bmi"
          name="bmi"
          placeholder="bmi results"
          value={bmi}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
            </Grid><br></br>

        <Typography variant="h5">Total Daily Energy Expenditure</Typography><br></br>
         <Grid item>
         <TextField
          variant="filled"
          size="small"
          id="tdee"
          name="tdee"
          placeholder="tdee results"
          value={tdee}
          type='text' multiline rows={1}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          style={{ width: '100%' }}
           />
         
            </Grid><br></br>
            

            <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >

        <Button
        variant="contained"
        style={{ backgroundColor: '#A663CC', color: 'white' }}
        onClick={(e) => { backpage(e) }}>Back</Button>
        <Button
         variant="contained"
         style={{ backgroundColor: '#A663CC', color: 'white' }}
        onClick={(e) => { usermeals(e) }}>Meals</Button>
        </Grid>

         </Grid>   
         
         
      </Paper>
      </Grid>
      
      
        
  </div>
  );
  
}

export default macrodetails;
