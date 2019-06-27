import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
  let input

  return (
    <div>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">To Do: </span>
            </div>
          <input type="text" id='todoInput' className="form-control" ref={node => (input = node)}/>

          <button className="btn btn-primary" type="submit">Add Todo</button>
          </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)