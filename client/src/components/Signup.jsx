import React from 'react';

const Signup = props => {
  const divStyle = {
    margin: '15px'
  };
  const inputStyle = {
    marginRight: '8px'
  }
  return (
    <div style={divStyle} className="my-5">
      <form onSubmit={props.signup}>
        <input style={inputStyle} type="text" value={props.value} onChange={props.change} />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default Signup;