import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AddPerson from '../containers/AddPerson'
import HomeContainer from '../containers/HomeContainer'
import HeaderContainer from '../containers/HeaderContainer'
import ActiveListContainer from '../containers/ActiveListContainer'

const App = () => (
  <Router>
	<div>
	  <HeaderContainer />
	  <Route exact path="/" component={HomeContainer}/>
      <Route path="/about" component={ActiveListContainer}/>
      <Route path="/topics" component={ActiveListContainer}/>
	 
  	</div>
  </Router>
)

export default App