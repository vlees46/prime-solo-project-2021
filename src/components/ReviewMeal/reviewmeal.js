
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetails from '../ReviewMeal/reviewDetails.js'


//import './addmeal.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function reviewmeal() {
  

  return (
   <div clasName="container">
     <ReviewDetails/>    
  </div>
  );
  
}

export default reviewmeal;
