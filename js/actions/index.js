let nextTodoId = 0
export const addPerson = (text, image, name) => {
  return {
    type: 'ADD_PERSON',
    id: nextTodoId++,
    text: text,
    image: image,
    name: name
  }
}

export const swapPerson = (oldId, newId, text, image, name) => {
  return {
    type: 'SWAP_PERSON',
    oldId: oldId,
    newId: newId,
    text: text,
    image: image,
    name: name
  }
}

export const addActive = (id, text, image, name, position) => {
  return {
    type: 'ADD_ACTIVE',
    id: id,
    text: text,
    image: image,
    name: name,
    position: position
  }
}

export const popActive = () => {
  return {
    type: 'POP_ACTIVE',
  }
}

export const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    name: name,
  }
}