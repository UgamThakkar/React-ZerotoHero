import React from 'react'
import User from './User'
import UserClass from './UserClass'
import React from 'react'
//starts rendering the cmponent and then noticies that theres a user class component here. So now the instance of this class based component is created and then
//from the instance the contructor of this class based component is called and then the render method is called.
class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent Componentdidmount");
  }

  render(){
    // console.log("Parent Render");
      return (
    <div>
      <h2>AboutUs</h2>
      <UserClass name = {"First Child"} location={"Canada"}/>
      {/* <UserClass name = {"Second Child"} location={"Canada"}/> */}

      </div>
    )
  }
}


/*
order of exuction - UNDERSTANDING REACT LIFE CYCLE - 2 phases - RENDER PHASE AND COMMIT PHASE: 
  -Parent Constructor
  -Parent Render
    
    -First Child Constructor
    -First Child Render

    -Second Child Constructor
    -Second Child Render

    <DOM Updated - In a single batch>
    -First Child COmponent DId mount
    -Second Child Component did mount
  
  -Parent Component did mount

  //when we have multiple children - React batches together the render phase of all the children - because its easy right - it only has to find the difference between the virtual DOM's
  of the children and render those - very quick operation. Step 2 then it batches together the commit phase of all the children together - updates the DOM here and because DOM manipulation is a
  heavy expensive task it batches all of the updates from all children together and does the updates and then component did mount for all the children are called. 
  Refer the image -react life cycle diagram
*/



export default About;