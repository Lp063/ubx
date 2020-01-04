import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Menu extends Component{

    pageNavItemClicked =(element)=>{
        
    }

    render(){
        return(
            <ul class="list-group" style={listMenuHolder}>
                <li class="list-group-item" style={listItemMenu} onClick = {this.pageNavItemClicked}>
                     <Link style={pageLink} to="/"><FontAwesomeIcon icon={faCoffee} /> Analytics</Link>
                </li>
                <li class="list-group-item" style={listItemMenu} onClick = {this.pageNavItemClicked}>
                     <Link style={pageLink} to="/reports"><FontAwesomeIcon icon={faCoffee} /> Reports</Link>
                </li>
            </ul>
        )
    }
}

const listMenuHolder={
}

const listItemMenu={
}

const pageLink={
    textDecoration:'none'
}

export default Menu