
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
import DeleteIcon from '@mui/icons-material/Delete';
import { SportsRugbySharp } from '@mui/icons-material';


const tableStyling = {
  padding: "0px 0px"
};
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
    
      
       <paper className={ClassNames.pageContent}>
       
         <TableContainer
           component={Paper}
           sx={{
             border: "1px solid rgba(0,0,0,0.2)",
             width: "max-content",
             padding: 1,
             marginLeft: 'auto',
             marginRight: 'auto'

           }}
          > 
        
         <Table fixedHeader={false} sx={{ tableLayout: "auto"}}>
         
        <TableHead>
         <h1> Meals</h1>
          <TableRow>
          <TableCell style={{ width: "30%" }} >
              Mealtime
            </TableCell >
            <TableCell style={{ width: "55%" }}>
              Description
            </TableCell>
            <TableCell style={{ width: "15%" }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
           <TableBody>
             {
                meals.map(meal =>
                  (<TableRow key={meal.id}>
                    
                      <TableCell>{meal.mealtime}</TableCell>
                      <TableCell>{meal.description}</TableCell>
                      <DeleteIcon onClick={e => removeMeals(meal.id)} />
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
