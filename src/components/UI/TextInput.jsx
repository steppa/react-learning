import React, { Fragment } from 'react';

const TextInput = props => {
  return (

    <Fragment >
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{props.title}</span>
        </div>

      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
      </div>
    </Fragment>
  )
}

export default TextInput;