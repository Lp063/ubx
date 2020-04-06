import React from 'react';

import Menu from './menu';


function Header(){
    return(
        <header style={NavStyle}>
            <nav className="navbar navbar-expand-lg navbar-expand-sm sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src="http://lohit.heliohost.org/me/assets/images/logo.png" width="30" height="30" alt="" />
                </a>
                <Menu />
            </nav>
        </header>
    )
}



const NavStyle={
    padding: "0%"
}

export default Header