import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions


function* updateUser(action) {

  console.log('updateUserSaga action.payload', action.payload)
  const response = yield axios({
    method: 'POST',
    url: '/api/macrocalculator',
    data: action.payload
  })
  yield put({ type: 'GET_UPDATE' })
}

function* fetchOneStudent(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `/api/macrocalculator/${action.payload}`
    })
    const userToEdit = response.data;
    yield put({
      type: 'SET_USER_TO_EDIT',
      payload: userToEdit
    })
  } catch (err) {
    console.log(err);
  }
}

function* updateUserSaga(){
   yield takeLatest('UPDATE_USER', updateUser);
   yield takeLatest('FETCH_ONE_STUDENT', fetchOneStudent);
   
}
 
  export default updateUserSaga;