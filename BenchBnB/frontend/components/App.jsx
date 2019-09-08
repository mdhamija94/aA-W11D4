import React from 'react';
import GreetingContainer from '../components/greeting_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import BenchIndexContainer from './bench_index_container';
import SearchContainer from './search_container';

const App = () => (
  <div className="app-container">
    <header className="header-container">
      <h1>BenchBnB</h1>
      <GreetingContainer />
    </header>
    
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;