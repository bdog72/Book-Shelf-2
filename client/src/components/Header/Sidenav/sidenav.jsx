import React from 'react';
import SideNav from 'react-simple-sidenav';

const Nav = props => {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background: '#242424',
                maxWidth: '220px'
            }}
        >
            <h1>Nav</h1>
        </SideNav>
    );
};

export default Nav;
