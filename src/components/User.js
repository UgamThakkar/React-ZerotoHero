import React from 'react'
import { useState } from 'react';
const User = (props) => {
  const [ count, setCount] = useState(0);
  return (
    <div className='user-card'>
      <h2>count : {count}</h2>
        <h2>{props.name}</h2>
        <h3>Location: {props.location}</h3>
        <h4>Contact: thakkarugam@</h4>
    </div>
  )
}

export default User