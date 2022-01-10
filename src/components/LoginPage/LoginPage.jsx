import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import '../LoginForm/loginform.css';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <Button
          type="button"
          style={{ backgroundColor: '#A663CC', color: 'white' }}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
       <br></br> </Button>
        <img
        src="https://thumbs.dreamstime.com/z/main-food-groups-macronutrients-carbohydrates-fats-proteins-comparison-dieting-healthcare-eutrophy-concept-vector-119268362.jpg">
        </img>
    
      </center>
      
    </div>
  );
}

export default LoginPage;
