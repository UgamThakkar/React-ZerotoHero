import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                login:"Dummy",
                bio:"Default",
                avatar_url:"dummy photo",
            },
        };

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/UgamThakkar");
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        });
        

    }


    render(){
        const { login, bio, avatar_url } = this.state.userInfo;
        console.log(this.state.userInfo);
        return (
            <div className='user-card'>
                <span><img src="https://avatars.githubusercontent.com/u/60033737?v=4" alt="Github-avatar" className="githubimg"></img></span>
                <h2>{login}</h2>
                <h3>{bio}</h3>
                <h4>Contact: thakkarugam@</h4>
            </div>
        );
    }
}
export default UserClass;