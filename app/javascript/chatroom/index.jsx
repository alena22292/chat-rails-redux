/* eslint no-alert:off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
// import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';

// State and reducers
const indentityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ['general', 'react', 'netherlands', 'coding'],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`, // prompt("What is your username?") ||
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: indentityReducer,
  currentUser: indentityReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
