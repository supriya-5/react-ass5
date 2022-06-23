
import React from 'react'
import HigherorderComp from './HigherorderComp';


 const ComA = (props) => {

  const {counter,handleCounter} = props
    
  return (
    <>
    <h1 > clickcounter:{counter}</h1>
    <button onClick={handleCounter}>click</button>
    </>
  )
}

const ClickCounter = HigherorderComp(ComA);

export default ClickCounter;