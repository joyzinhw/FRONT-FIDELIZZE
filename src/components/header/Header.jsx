import React from "react";
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../searchBar/SearchForm";
import LoginButton from "../buttons/LoginButton";
import SignUpButton from "../buttons/SignUpButton";

function Header(props) {
    return (
        <div>
            <Navbar expand="lg" className="custom-navBar mb-5">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
              src="../src/assets/images/logo.png"
              alt="Logo"
              width="70"
              height="80"
              className="d-inline-block align-top"
            />
                    </Navbar.Brand>
                   
                </Container>
            </Navbar>

        </div>
    )
}

export default Header 