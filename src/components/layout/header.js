import React from 'react';

import Menu from './menu';


function Header(){
    return(
        <div class="col-md-12" style={NavStyle}>
            <nav class="navbar navbar-expand-lg navbar-expand-sm sticky-top navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="http://lohit.heliohost.org/me/assets/images/logo.png" width="30" height="30" alt="" />
                </a>
                <Menu />
            </nav>
        </div>
    )
}



const NavStyle={
    padding: "0%"
}

export default Header