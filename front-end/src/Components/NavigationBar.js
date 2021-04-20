import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button,Form } from 'react-bootstrap';
import styled from 'styled-components';

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

const StyledButton = styled(Button)`
    background-color: #222;
    color: white;
    border: 2px solid #FF5733;    
`;

const StyledNavItem = styled(Nav.Item)`
    margin-right: 40px;
    font-size: 20px;
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <StyledButton>Search</StyledButton>
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledNavItem>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem/>
          <StyledNavItem>
            <Nav.Link>
              <Link to="/orderhistory">Order History</Link>
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link>
              <Link to="/menu">Menu</Link>
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link>
              <Link to="/account">Account</Link>
            </Nav.Link>
          </StyledNavItem>
          {/* <StyledNavItem>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </StyledNavItem> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)