import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ActiveList = ({ actives, onPersonClick }) => (
  <div className="activeList">
    {actives.map(person => (
      <ReactCSSTransitionGroup
            transitionName="actives"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={1000}>
        <div key={person.id} id={"pane"+(person.position)} className="pane">
          
            <Person key={person.id} {...person} />
          
        </div>
      </ReactCSSTransitionGroup>
      
    ))}
  </div>
)

ActiveList.propTypes = {
  actives: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default ActiveList