import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import "./TeamRegistration.css";

class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            RegistrationStep:1,
            formFields:{
                firstName:"",
                lastName:"",
                contact:"",
                registrationType:null,
                profileImage:"",
                email:"",
                password:"",
                teamName:"",
                teamPlayers:[]
            }
        };
    }

    handleChange =(event)=>{
        let newState = Object.assign({}, this.state);
        newState.formFields[event.target.name] = event.target.value;
        this.setState(newState);
        //this.setState({formFields[event.target.name] : event.target.value});
    }
    
    submitTeamRegistration = (event) =>{
        event.preventDefault();
        console.log(this.state.formFields);
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Row lg={2} md={2} sm={2} xs={2}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <label htmlFor="inputEmail4">First Name</label>
                            <input type="text" name="firstName"  onChange={this.handleChange} className="form-control" placeholder="Cristiano" />
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <label htmlFor="inputEmail4">Last Name</label>
                            <input type="text" name="lastName" onChange={this.handleChange} className="form-control" placeholder="Ronaldo" />
                        </Col>
                    </Row>
                    <Row lg={2} md={2} sm={1} xs={1}>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputEmail4">Contact</label>
                            <input type="contact" name="contact" onChange={this.handleChange} className="form-control" id="inputEmail4" placeholder="Phone Number" />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" name="email" onChange={this.handleChange} className="form-control" id="inputEmail4" placeholder="cristiano@cr7.com" />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" name="password" onChange={this.handleChange} className="form-control" id="inputPassword4" placeholder="cr7@portugal85" />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputPassword4">Registration Type</label>
                            <select defaultValue={'DEFAULT'}  onChange={this.handleChange} className="browser-default custom-select" name="registrationType" as="select" required>
                                <option value="DEFAULT" disabled >Manager Or Player</option>
                                <option value="0">Manager</option>
                                <option value="1">Player</option>
                            </select>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12} className="form-group" style={{display:"none"}} >
                            <input type="file" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Account Image</label>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Col>
                <Col  lg={12} md={12} sm={12} xs={12}>
                    <button type="submit" onClick={this.submitTeamRegistration} className="btn btn-success green-submit-button">Sign up</button>
                </Col>
            </form>
        )
    }
}

export default TeamRegistration