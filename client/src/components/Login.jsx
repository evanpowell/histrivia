import React from 'react';

const Login = props => {
  const divStyle = {
    margin: '15px'
  };
  const inputStyle = {
    marginRight: '8px'
  }
  return (
    <div style={divStyle} className="my-5">
      <form onSubmit={(event) => {props.login(event, props.value)}}>
        <input style={inputStyle} type="text" value={props.value} onChange={props.change} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;