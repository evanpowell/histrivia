import React from 'react';

const Login = props => {
  return (
    <form onSubmit={props.login}>
      <input type="text" value={props.value} onChange={props.change} />
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;