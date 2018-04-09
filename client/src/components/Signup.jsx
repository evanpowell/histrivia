import React from 'react';

const Signup = props => {
  return (
    <form onSubmit={props.signup}>
      <input type="text" value={props.value} onChange={props.change} />
      <input type="submit" value="Signup" />
    </form>
  );
}

export default Signup;