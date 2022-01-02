import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* getupdate(action) {

    console.log(action)
    try {
      const response = yield axios({
        method: 'GET',
        url: '/api/macrocalculator',
      })
      yield put({ 
        type: 'SET_UPDATE',
        payload: response.data
      })
    } catch(error) {
      console.log('error GETting from Server', error);
    }
  }

function* getUpdateSaga(){
//  yield takeLatest('FETCH_REVIEW', fetchReview);
  yield takeLatest('GET_UPDATE', getupdate);
}
 
  export default getUpdateSaga;