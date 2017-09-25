import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AddPerson from '../containers/AddPerson'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import ProjectsContainer from '../containers/ProjectsContainer'
import AboutMeContainer from '../containers/AboutMeContainer'
import ActiveListContainer from '../containers/ActiveListContainer'

const App = () => (
  <Router>
	<div>
		<ReactCSSTransitionGroup
            transitionName="persons"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
		  <Route exact path="/" component={HomeContainer}/>
	      <Route path="/projects" component={ProjectsContainer}/>
	      <Route path="/aboutme" component={AboutMeContainer}/>
        </ReactCSSTransitionGroup>
        <HeaderContainer />
  	</div>
  	
  </Router>
)

export default App