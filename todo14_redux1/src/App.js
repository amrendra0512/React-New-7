import React from 'react'
import { decrement, increment } from './Actions'
import { useDispatch, useSelector } from "react-redux";



const App = () => {
  const {count, count12} = useSelector(state=> state)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count {count}</h1> { ''}
      <h1>Count12 {count12}</h1>
     <button onClick={()=> dispatch(increment())}>
      Incr
     </button>
     <button onClick={()=> dispatch(decrement())}>
      Decr
     </button>
    </div>
  )
}

export default App
