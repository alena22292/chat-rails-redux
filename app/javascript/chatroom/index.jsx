/* eslint no-alert:off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';
import messagesReducer from './reducers/messages_reducer';

// State and reducers
const chatApp = document.getElementById('chat-app');

const channels = JSON.parse(chatApp.dataset.channels).map(c => c.name);
const indentityReducer = (state = null, action) => state;

const initialState = {
  messages: [],
  channels: channels
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: indentityReducer
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
  chatApp
);
