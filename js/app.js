import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homepageApp from './reducers'
import App from './components/App'

const initialState = { 
  name: "John Salter"
};

let store = createStore(homepageApp, initialState)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)