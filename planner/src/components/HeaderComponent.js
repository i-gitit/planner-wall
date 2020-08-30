import React, { Component } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,Nav,Navlink,Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super (props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(
            { isNavOpen:!this.state.isNavOpen }
        )
    };

    render() {
        return(
            <div>
                <Navbar dark fixed expand="md">
                <div className="container">
                   
                    <NavbarBrand href="/">Planner WS</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/notes">Notes</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
    </div>
        );
    }
}

export default Header;