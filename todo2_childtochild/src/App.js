import React, { useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

const App = () => {
const [data,setData]= useState('')
  const name1 = 'amre'
  const childToParent = (main)=> {
    setData(main)
console.log(main);
  }
  const name2 = 'prince'

  return (
    <div>
      <h2>Parent</h2>
      <Child1 name1={name1} data1={data}/>

      <Child2 name2={name2} clickHandler={childToParent}/>
    </div>
  )
}

export default App
