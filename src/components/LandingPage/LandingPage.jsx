import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button, Grid } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      
      {/* Login Button */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <p class="p1">Already a Member?</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#A663CC', color: 'white' }}
          onClick={onLogin}
        >Login</Button>
      </Grid>

      {/* Register Button */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <p class="p1">New Member?</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#A663CC', color: 'white' }}
          onClick={onRegister}
        >Register</Button>
      </Grid>

      <h2>About</h2>
      <img
        src="https://thumbs.dreamstime.com/z/main-food-groups-macronutrients-carbohydrates-fats-proteins-comparison-dieting-healthcare-eutrophy-concept-vector-119268362.jpg">
      </img>
      <p class="p1">Macronutrients are consisted of Carbohydrates, fats and proteins.  These are the essential 
        nutrients you use in the largest amounts in order to provide energy to move, breathe, sleep and properly function. 
        </p>
      
    </div>
  );
}

export default LandingPage;
