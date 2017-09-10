import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PersonList = ({ persons, actives, onPersonClick }) => (
  <div className="personList">
    {persons.map(person => (
       <ReactCSSTransitionGroup
            transitionName="persons"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
        <Person key={person.id} {...person} onClick={() => onPersonClick(person.id, person.text, person.image, person.name, actives)} />
      </ReactCSSTransitionGroup>
    ))}
  </div>
)

PersonList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPersonClick: PropTypes.func.isRequired
}

export default PersonList