import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

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
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
