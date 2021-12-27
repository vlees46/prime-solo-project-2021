import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* getreview(action) {

    console.log(action)
    try {
      const response = yield axios({
        method: 'GET',
        url: '/api/reviewmeal',
      })
      yield put({ 
        type: 'SET_REVIEW',
        payload: response.data
      })
    } catch(error) {
      console.log('error GETting from Server', error);
    }
  }

function* getReviewSaga(){
//  yield takeLatest('FETCH_REVIEW', fetchReview);
  yield takeLatest('GET_REVIEW', getreview);
}
 
  export default getReviewSaga;