import { connect } from 'react-redux'
import { removePerson } from '../actions'
import ActiveList from '../components/ActiveList'

const mapStateToProps = state => {
  return {
    actives: state.actives
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersonClick: (id, text, image, name)=> {
      
      //dispatch(remove(id))
    }
  }
}

const ActiveListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveList)

export default ActiveListContainer