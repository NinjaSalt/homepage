import { connect } from 'react-redux'
import { updateName } from '../actions'
import Home from '../components/Home'

let nameScroll = ["KJHBVRTUIMP", "JLVHUTAWYQN", "JOZVYRTPLMZ","JOHQUTPVMLZ", "JOHNRTVJPKX", "JOHN ZWHINM", "JOHN SPLNBE", "JOHN SAQRBV", "JOHN SALVPM", "JOHN SALTBF", "JOHN SALTEZ", "JOHN SALTER"]

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  //work around for component intitailization so that Home can remain a stateless component

  function scroll(index){
    if(index == nameScroll.length) return
    dispatch(updateName(nameScroll[index]))
    index++
    setTimeout(function(){scroll(index)}, 200)
  }

  scroll(0)
  return {
    
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



export default HomeContainer