import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{

    pageNavItemClicked =(element)=>{
        
    }

    render(){
        return(
            <div>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-sm-none .d-md-block" id="navbarNav">
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item active" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} className="nav-link" to="/"> Home</Link>
                        </li>
                        <li className="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} className="nav-link" to="/analytics"> Analytics</Link>
                        </li>
                        <li className="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} className="nav-link" to="/reports"> Reports</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const pageLink={
    textDecoration:'none'
}

export default Menu