import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AddPerson from '../containers/AddPerson'
import HomeContainer from '../containers/HomeContainer'
import HeaderContainer from '../containers/HomeContainer'
import ActiveListContainer from '../containers/ActiveListContainer'

const App = () => (
  <div>
  	<HeaderContainer />
  	<HomeContainer />
  </div>
)

export default App