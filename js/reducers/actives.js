const actives = (state = [], action) => {
  switch (action.type) {
    //Add a new 
    case 'ADD_ACTIVE':
      state.forEach(active =>{
        active.position++
      })
      return [
        {
          id: action.id,
          text: action.text,
          image: action.image,
          name: action.name,
          position: action.position
        },
        ...state
      ]
    case 'POP_ACTIVE':
      state.pop()
      return [
        ...state
      ]
    default:
      return state
  }
}

export default actives