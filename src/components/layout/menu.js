import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Menu(){
    return(
        <ul class="list-group" style={listMenuHolder}>
            <li class="list-group-item" style={listItemMenu}>
                 <Link style={pageLink} to="/"><FontAwesomeIcon icon={faCoffee} /> Analytics</Link>
            </li>
        </ul>
    )
}

const listMenuHolder={
}

const listItemMenu={
}

const pageLink={
    textDecoration:'none'
}

export default Menu