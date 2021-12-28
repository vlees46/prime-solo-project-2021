import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteMeal(action) {
    console.log("deleteMeal action", action);
    try {
      const response = yield axios({
        method: "DELETE",
        url: `/api/reviewmeal/${action.payload}`,
      });
      //action.payload will be req.params on the ^^ server side ^^
      // call the dispatch that GETs the meals
      yield put({
        type: "GET_REVIEW",
      });
    } catch (error) {
      window.alert('You are not authorized to delete this meal.');
      // console.log("error deleting from Client to Server", error);
    }
  }
  
  export default function* deleteShelfSaga() {
      yield takeLatest('DELETE_MEAL', deleteMeal)
  }
  