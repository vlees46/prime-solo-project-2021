import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* getusermeal(action) {

    console.log(action)
    try {
      const response = yield axios({
        method: 'GET',
        url: '/api/usermeals',
      })
      yield put({ 
        type: 'SET_USERMEAL',
        payload: response.data
      })
    } catch(error) {
      console.log('error GETting from Server', error);
    }
  }

function* getUserMealSaga(){
//  yield takeLatest('FETCH_REVIEW', fetchReview);
  yield takeLatest('GET_USERMEAL', getusermeal);
}
 
  export default getUserMealSaga;