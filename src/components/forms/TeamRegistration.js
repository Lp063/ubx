import React,{ Component } from 'react';
import TeamManager from './teamRegistrationSteps/TeamManager';
import TeamPlayers from './teamRegistrationSteps/TeamPlayers';

class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            RegistrationStep:1,
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            teamName:"",
            teamPlayers:[]
        };
        
        this.handleSubmit = this.teamManagerDetails.bind(this);
    }

    handleChange =(event)=>{
        this.setState({[event.target.name] : event.target.value});
    }

    teamManagerDetails =(event)=>{
        //this.props.registerUser(this.state);
        this.setState({RegistrationStep:2});
        /* this.setState({
            name:"",
            lastName:"",
            email:"",
            password:"",
            username:"",
            teamPlayers:[]
        }); */
    }

    getInitialState=()=>{
		return {
			step: 1
		}
    }
    
    render(){
        switch(this.state.RegistrationStep){
            case 1:
                return ( <TeamManager teamManagerDetails={this.teamManagerDetails}/> );
            case 2:
                return ( <TeamPlayers/> );
            default:
                return null;
        }
    }
}

export default TeamRegistration