import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* updateUser(action) {

  console.log('updateUserSaga action.payload', action.payload)
  const response = yield axios({
    method: 'POST',
    url: '/api/user',
    data: action.payload
  })
  yield put({ type: 'GET_UPDATE' })
}


function* updateUserSaga(){
//  yield takeLatest('FETCH_REVIEW', fetchReview);
  yield takeLatest('UPDATE_USER', updateUser);
}
 
  export default updateUserSaga;