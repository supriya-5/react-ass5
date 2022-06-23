import React from 'react'
import HigherorderComp from './HigherorderComp';


 const ComB = (props) => {

  const {counter,handleCounter} = props
    
  return (
    <>
    <h1 > Doubleclickcounter:{counter}</h1>
    <button onDoubleClick={handleCounter}>click</button>
    </>
  )
}

const DoubleClickCounter = HigherorderComp(ComB);

export default DoubleClickCounter;