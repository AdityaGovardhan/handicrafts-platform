import React from 'react';
import { Nav , Navbar, NavItem} from  'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href='/'> local works</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">about</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
