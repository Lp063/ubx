import React,{ Component } from 'react';


class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            teamName:"",
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange =(event)=>{
        let key = event.target.name;
        this.setState({key : event.target.value});
        console.log(this.state);
    }

    handleSubmit =(event)=>{
        console.log(this.state);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="col">
                        <label for="inputEmail4">First Name</label>
                        <input type="text" name="firstName"  onChange={this.handleChange} class="form-control" placeholder="Cristiano" />
                    </div>
                    <div class="col">
                        <label for="inputEmail4">Last Name</label>
                        <input type="text" name="lastName" onChange={this.handleChange} class="form-control" placeholder="Ronaldo" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Team Name</label>
                    <input type="text" name="teamName" onChange={this.handleChange} class="form-control" id="inputAddress" placeholder="Knight Riders" />
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default TeamRegistration