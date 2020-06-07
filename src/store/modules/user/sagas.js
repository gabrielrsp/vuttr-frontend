import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {

  const { name, email, ...rest } = payload.data;

  const profile = Object.assign(
    { name, email },
    rest.oldPassword ? rest : {}
  );

  if (rest.password) {
    if (rest.password !== rest.confirmPassword) {
      toast.error('confirmation password is not matching with new password');
      yield put(updateProfileFailure())
    }
    if ((rest.password.length < 6) || (rest.confirmPassword.length < 6)) {
      toast.error('password must have 6 characters at least');
      yield put(updateProfileFailure())
      return
    }
  }

  try {
    const response = yield call(api.put, 'users', profile);
    toast.success('Profile updated');
    yield put(updateProfileSuccess(response.data));
  }
  catch {
    toast.error('failed to update');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
