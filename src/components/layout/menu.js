import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{

    pageNavItemClicked =(element)=>{
        
    }

    render(){
        return(
            <div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-sm-none .d-md-block" id="navbarNav">
                    <ul class="navbar-nav mr-auto" >
                        <li class="nav-item active" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} class="nav-link" to="/"> Home</Link>
                        </li>
                        <li class="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} class="nav-link" to="/analytics"> Analytics</Link>
                        </li>
                        <li class="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={pageLink} class="nav-link" to="/reports"> Reports</Link>
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