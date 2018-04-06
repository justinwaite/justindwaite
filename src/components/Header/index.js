import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './header.scss';
import logo from './logo-white.svg';

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  close = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar className="page-navbar" color="primary" dark expand="md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={this.close}>
              <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                <img className="site-logo" src={logo} alt="JW" />
                <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <span>Justin Waite</span>
                  <span style={{ fontSize: 14 }}>Web and Mobile Developer</span>
                </div>
              </div>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/spreadsheets" onClick={this.close}>
                    Gallery
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/jdeanwaite">Github</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lab">Lab</NavLink>
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
