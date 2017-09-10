import { connect } from 'react-redux'
import { swapPerson, addActive, popActive } from '../actions'
import PersonList from '../components/PersonList'

const mapStateToProps = state => {
  return {
    persons: state.persons,
    actives: state.actives
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersonClick: (id, text, image, name, actives) => {
      //add a new person to the active list
      dispatch(addActive(id, text, image, name, 1))
      //take the data at the end of active and add it to the end of persons list
      dispatch(swapPerson(id, actives[actives.length-1].id, actives[actives.length-1].text, actives[actives.length-1].image, actives[actives.length-1].name))
      //pop the last element of active list
      dispatch(popActive())
    }
  }
}

const PersonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonList)

export default PersonListContainer