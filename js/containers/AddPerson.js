import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../actions'

let AddPerson = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addPerson(input.value, "test image", "frank"))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddPerson = connect()(AddPerson)

export default AddPerson