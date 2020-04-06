import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import "./TeamRegistration.css";

class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            RegistrationStep:1,
            firstName:"",
            lastName:"",
            contact:"",
            registrationType:0,
            profileImage:"",
            email:"",
            password:"",
            teamName:"",
            teamPlayers:[]
        };
    }

    handleChange =(event)=>{
        this.setState({[event.target.name] : event.target.value});
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Row lg={2} md={2} sm={2} xs={2}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <label htmlFor="inputEmail4">First Name</label>
                            <input type="text" name="name"  onChange={this.handleChange} className="form-control" placeholder="Cristiano" />
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
                            <input type="email" name="email" onChange={this.handleChange} className="form-control" id="inputEmail4" placeholder="Email" />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" name="password" onChange={this.handleChange} className="form-control" id="inputPassword4" placeholder="Password" />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputPassword4">Registration Type</label>
                            <select className="browser-default custom-select" name="registrationType" as="select" custom required>
                                <option value="0" disabled selected>Manager Or Player</option>
                                <option value="0">Manager</option>
                                <option value="1">Player</option>
                            </select>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group custom-file" style={{display:"none"}}>
                            <label htmlFor="inputPassword4">Profile Image</label>
                            <input
                                type="file"
                                name="profileImage"
                                className=""
                                id="inputGroupFile01"
                                custom
                            />
                            {/* <file 
                                id="custom-file-translate-scss"
                                label="Custom file input"
                                lang="en"
                                custom
                            /> */}
                        </Col>
                    </Row>
                </Col>
                <Col md={{ span: 12, offset: 3 }}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Col>
            </form>
        )
    }
}

export default TeamRegistration