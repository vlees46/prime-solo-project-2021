import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import UserPageStyle from './UserPageStyle.css';

function UserPage() {


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

//*Create state for calculator variables  -- DONE
//*Create form and check to see if state is being entered properly as an object - DONE
//*Perform calculations, almost done, but need to do some corrections
//*SAGAS - Reducers
//*Update Database


  return (    
    

      
     <div className="container">
      <h1>Macro Calculator</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

           
  </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
