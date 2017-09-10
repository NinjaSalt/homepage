const persons = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          image: action.image,
          name: action.name
        }
      ]
    case 'SWAP_PERSON':
      /*
      for(var i = 0; i < state.length; i++){
        if(state[i].id === action.oldId){
          state[i].id = action.newId
          state[i].text = action.text
          state[i].image = action.image
          state[i].name = action.name
        }
          
      }
      return [
        ...state
      ]*/
      var index;
      for(var i = 0; i < state.length; i++){
        if(state[i].id === action.oldId){
          index = i;
        }
      }
      state.splice(index, 1)
      return [
        ...state,
        {
          id: action.newId,
          text: action.text,
          image: action.image,
          name: action.name
        }
      ]
    default:
      return state
  }
}

export default persons