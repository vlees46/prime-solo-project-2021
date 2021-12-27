
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
  const meals = useSelector((store) => store.meal);
  

console.log('reviewmeal reducert', meals);

useEffect(() => {
    dispatch({ type: 'GET_REVIEW' });
  }, []);
  



  return (
    <main>
      <h1>Review Meals</h1>
      <ul>
         {meals.map((meals) => {
              return <li>{mealtime}</li>
          })}
      </ul>
    </main>
  );
  
}

export default reviewmeal;
