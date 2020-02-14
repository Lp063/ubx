import React,{ Component } from 'react';

class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            teamName:""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange =(event)=>{
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit =(event)=>{console.log(this.state);
        this.props.registerUser(this.state);
        this.setState({
            name:"",
            lastName:"",
            email:"",
            password:"",
            username:""
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input type="text" name="name"  onChange={this.handleChange} className="form-control" placeholder="Cristiano" />
                    </div>
                    <div className="col">
                        <label htmlFor="inputEmail4">Last Name</label>
                        <input type="text" name="lastName" onChange={this.handleChange} className="form-control" placeholder="Ronaldo" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default TeamRegistration