import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Button, Grid, Box } from '@mui/material';
import { borders } from '@mui/system';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form   onSubmit={login}>
      <h2>Login</h2>
      
      <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
     
      >
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <Box  style={{ backgroundColor: '#2C2829', color: 'white' }} sx={{ borderRadius: 1 }}>
      <div>
      
        <label style={{ color: 'white' }} htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      
      </div>
      <div>
  
        <label style={{ color: 'white' }}  htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        
      </div>
      </Box> 
      </Grid><br></br>
    
      <div>
      <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center">

        <Button variant="contained" style={{ backgroundColor: '#A663CC', color: 'white' }} type="submit" name="submit" value="Log In" >Log In</Button><br></br>
        </Grid>
      </div>
     
    </form>
  );
}

export default LoginForm;
