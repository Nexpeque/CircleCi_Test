import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers({
  counterStore: counterReducer
});

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
