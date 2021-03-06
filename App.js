import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import quizReducers from './reducers/quizReducers';
import LemonGrassApp from './LemonGrassApp';

const reducer = quizReducers;
const store = createStore(reducer);

export default class App extends Component {
  render() {
    console.log("Main App:");
    console.log(store.getState());
    return (
        <Provider store={store}>
          <LemonGrassApp />
        </Provider>
    );
  }
}

