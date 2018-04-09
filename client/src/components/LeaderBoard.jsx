import React from 'react'

const LeaderBoard = props => {
  if (props.user.name) {
    const style = {
      marginTop: '1rem',
      marginRight: '1rem',
      textAlign: 'right'
    }
    return(
      <div style={style}>
        <p>Signed in as: {props.user.name}</p>
        <p>Score: {props.user.score}</p>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default LeaderBoard;