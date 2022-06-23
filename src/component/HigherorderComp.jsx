import React from 'react'
import { useState } from 'react';

const HigherorderComp = (Component) => {
  
  const UpgradeComponent = () =>{
    const [counter, setCounter] = useState(0);

    const handleCounter = () =>{
        setCounter(counter+1)
    }
    return (
        <Component counter={counter} handleCounter={handleCounter}/>
       )
  }
   
return UpgradeComponent
  
}

export default HigherorderComp