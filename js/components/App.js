import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AddPerson from '../containers/AddPerson'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import ProjectsContainer from '../containers/ProjectsContainer'
import AboutMeContainer from '../containers/AboutMeContainer'
import ActiveListContainer from '../containers/ActiveListContainer'

const App = () => (
  <Router>
	<div>
	  
	  <Route exact path="/" component={HomeContainer}/>
      <Route path="/projects" component={ProjectsContainer}/>
      <Route path="/aboutme" component={AboutMeContainer}/>
	  <HeaderContainer />
  	</div>
  </Router>
)

export default App