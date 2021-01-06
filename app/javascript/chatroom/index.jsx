/* eslint no-alert:off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
// import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';

// State and reducers
const indentityReducer = (state = null, action) => state;

const initialState = {
  messages: [],
  channels: ['general', 'react', 'rails', 'coding'],
  // currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`, // prompt("What is your username?") ||
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: indentityReducer
  // currentUser: indentityReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router>
      <Switch>
        <Route path="/channels/:channel" component={App} />

      </Switch>
    </Router>
  </Provider>,
  document.getElementById('chat-app')
);
// Redirect from="/" to="/general"
// history={history} from the router
