import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Header = ({ }) => (
  <div className="header">
     <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
      </ul>
  </div>
)

Header.propTypes = {
}

export default Header