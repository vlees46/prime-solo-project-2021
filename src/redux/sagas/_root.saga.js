import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import createMealSaga from './createmeal.saga';
import getReviewSaga from './getreview.saga';
import deleteMealSaga from './deletemeal.saga';
import getUpdateSaga from './getupdate.saga';
import updateUserSaga from './updateuser.saga';
import getUserMealSaga from './getusermeal.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    createMealSaga(),
    getReviewSaga(),
    deleteMealSaga(),
    getUpdateSaga(),
    updateUserSaga(),
    getUserMealSaga(),
    
  ]);
}
