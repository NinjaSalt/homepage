import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import aboutUsApp from './reducers'
import App from './components/App'
import data from './data'

console.log(data);
const initialState = { 
  actives: data.actives,
  persons: data.persons
};

let store = createStore(aboutUsApp, initialState)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)