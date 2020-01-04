import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <header >
            <div class="col-md-12" style={headerStyle}>
                <FontAwesomeIcon icon={faCoffee} pull="right" />
            </div>
        </header>
    )
}

const headerStyle={
    background:'white none repeat scroll 0 0',
    color:'#6a0dad',
    textAlign:'center',
    padding:'13px 33px 5px 0px',
    height: '41px'
}

export default Header