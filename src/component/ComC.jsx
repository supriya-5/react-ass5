

import HigherorderComp from './HigherorderComp';



const ComC = (props) => {

    const {counter,handleCounter} = props
      
    return (
      <>
      <h1 onMouseOver={handleCounter} > MouseHover:{counter}</h1>
      
      </>
    )
  }
  
  const MouseHover = HigherorderComp(ComC);
  
  export default MouseHover;