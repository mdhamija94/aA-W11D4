import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TEST IMPORTS
import * as SessionUtil from './util/session_api_util';
import * as BenchUtil from './util/bench_api_util';
// import * as Action from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.signup = SessionUtil.signup;
  window.login = SessionUtil.login;
  window.logout = SessionUtil.logout;

  window.fetchBenches = fetchBenches;
  // window.signup = Action.signup;
  // window.login = Action.login;
  // window.logout = Action.logout;

  // TESTING END
  
  const root = document.getElementById("root");
  ReactDOM.render( <Root store={store} />, root );
});