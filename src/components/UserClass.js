import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2,
        }

        console.log(this.props.name + "Constructor");
    }

    componentDidMount(){
        console.log(this.props.name + "component did mount");
    }


    render(){
        console.log(this.props.name + "Render");
        
        const {name, location} = this.props;
        const { count } = this.state;
        return (
            <div className='user-card'>
                <h2>Count: {count}</h2>
                <button onClick={()=>{
                    //NEVER UPDATE STATE VARIABLES DIRECTLY eg: this.state.count = this.state.count+1 - not allowed this is bad practice.
                    this.setState({
                        count: this.state.count + 1, //in class based compnents this is where it will re-render the entire component whenever the count increases.
                    });
                }}>Increase Count</button>
                <h2>{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: thakkarugam@</h4>
            </div>
        );
    }
}
export default UserClass;