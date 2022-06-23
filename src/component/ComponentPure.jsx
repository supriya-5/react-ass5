
import React from 'react'
import  {PureComponent } from 'react'

class ComponentPure extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      eg: "Example",
      user: {course:"Mern"}
    }
  }

  handleClicked = () =>{
    const user = {...this.state.user};
    user.course = 'Mern or Mean';
    this.setState(user);
  }

  render() {
     
console.log("By using purecomponent")
    return (
        <>
         <h1>PureComponent</h1>
        <h3>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.</h3>
         
         <h2>{this.state.eg} </h2>
         <button onClick={this.handleClicked}>click</button>
        <h5>click and see the console</h5>
        </>
      
    )
  }
}


   
  
 export default ComponentPure

