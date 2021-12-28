import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* createMeal(action) {

  console.log('createMealSaga action.payload', action.payload)
  const response = yield axios({
    method: 'POST',
    url: '/api/addmeal',
    data: action.payload
  })
  yield put({ type: 'GET_REVIEW' })
}

/* function* deleteMeal (action){
  try {
    const response = yield axios.delete(`/api/reviewmeal/${action.payload.id}`, action.payload) 
    yield put({ type: 'FETCH_REVIEW', payload: response.data });

  } catch (error) {
    console.log('Shelf get request failed', error);
  }
} */

function* createMealSaga(){
//  yield takeLatest('FETCH_REVIEW', fetchReview);
  yield takeLatest('CREATE_MEAL', createMeal);
}
 
  export default createMealSaga;