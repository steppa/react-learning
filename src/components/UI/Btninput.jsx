import React, { Fragment } from 'react';

const TextInput = props => {
  return (

    <Fragment >

      <input
        className={props.btnClass}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />

    </Fragment>
  )
}

export default TextInput;