import React from 'react'

const Child2 = ({name2, clickHandler}) => {
  return (
    <div>
      Child2
     <h1> {name2}</h1>
     <button onClick={()=>clickHandler(name2)}>child2btn</button>
    </div>
  )
}

export default Child2
