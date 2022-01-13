
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
import { Button } from '@material-ui/core';


//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ReviewDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

 
  const meals = useSelector((store) => store.meal);

  
const backpage = (e) =>  {
    history.push('/addmeal');
  
  }

  
  
useEffect(() => {
    dispatch({ type: 'GET_REVIEW' });
  }, []);
  
const removeMeals = (id) => {
  dispatch ({
    type: 'DELETE_MEAL',
    payload: id
  })

} 

  console.log('reviewmeal REDUCER', meals);

  return (
    <div>
    
    <h1> User Meals</h1>
       <paper className={ClassNames.pageContent}>
         <TableContainer>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         
        <TableHead>
          <TableRow>
            <TableCell>
              Mealtime
            </TableCell>
            <TableCell>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
           <TableBody>
             {
                meals.map(meal =>
                  (<TableRow key={meal.id}>
                    
                      <TableCell>{meal.mealtime}</TableCell>
                      <TableCell>{meal.description}</TableCell>
                  </TableRow>)         
                  )
      
          }
          </TableBody>
          </Table>
      </TableContainer>
       
      </paper>


















    
      <button onClick={(e) => { backpage(e) }}>Back</button>
      
  </div>
  );
  
}

export default ReviewDetails;
