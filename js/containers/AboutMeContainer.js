import { connect } from 'react-redux'
import { removePerson } from '../actions'
import AboutMe from '../components/AboutMe'

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const AboutMeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe)

export default AboutMeContainer