import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ onClick, text, image, name }) => (
  <div className="personHolder"
    onClick={onClick}
    /*style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}*/
  >
    <div className = "person">
      <div className="image" style={{
        backgroundImage: `url(${image})`
      }}>
      </div>
      <div className="name">{name}</div>
      <div className="text">{text}</div>
    </div>
    
  </div>
)

Person.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number
}

export default Person