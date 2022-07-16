import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import SignUp from '../../Form';
import { click } from '@testing-library/user-event/dist/click';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Robin<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa-caret-left'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map ((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>
                    Sing up
                </Button>
            </nav>
        )
    }
}

export default Navbar;