import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Signin from '../pages/Signin';
import SignUp from '../pages/Signup';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Signin} />
      <Route path='/register' exact component={SignUp} />
      <Route path='/main' component={Main} isPrivate />
      <Route path='/profile' exact component={Profile} isPrivate />
    </Switch>
  );
}
