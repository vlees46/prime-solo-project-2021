
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function reviewmeal() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  
useEffect(() => {
    dispatch({ type: 'GET_REVIEW' });
  }, []);
  

  const meals = useSelector((store) => store.meal);

  console.log('reviewmeal REDUCER', meals);

  return (
    <div>
    
    <ul>
        {meals.map((meal) => {
          return <li key={meal.id}>{meal.mealtime}<br></br> Description: {meal.description} </li>
          
        })}
      </ul>
  </div>
  );
  
}

export default reviewmeal;
