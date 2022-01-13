
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ClassNames } from '@emotion/react';


//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function usermeals() {
  const dispatch = useDispatch();
  const history = useHistory();

 /*  const user = useSelector((store) => store.user);
  const meals = useSelector((store) => store.meal); */

  const usermeals = useSelector((store) => store.usermeal)

  
const backpage = (e) =>  {
    history.push('/macroresults');
  
  }
  
 useEffect(() => {
    dispatch({ type: 'GET_USERMEAL' });
  }, []);
  


  console.log('usermeals REDUCER', usermeals);

  return (
    <div>




       <h1> User Meals</h1>
       <paper className={ClassNames.pageContent}>
         <TableContainer>
           <TableBody>
             {
                usermeals.map(usermeal =>
                  (<TableRow key={usermeal.id}>
                      <TableCell>{usermeal.mealtime}</TableCell>
                      <TableCell>{usermeal.description}</TableCell>
                  </TableRow>)         
                  )
      
          }
          </TableBody>
      </TableContainer>
       
      </paper>
      <button onClick={(e) => { backpage(e) }}>Back</button>
  </div>
  );
  
}

export default usermeals;
