import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = ({ name }) => (
  <div className="home">
    <div className="hero">
      <div className="name">{name}</div>
    </div>
  </div>
)

Home.propTypes = {
  name: PropTypes.string.isRequired
}

export default Home