import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Box, Radio, Button } from '@material-ui/core';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button 
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      variant="container"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;