import {Navbar, Nav, Container, NavbarBrand, NavDropdown } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <NavbarBrand href="#home">
                    <img
                    to="/home"
                    alt=""
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    />
                </NavbarBrand>
                    <Nav>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/product">Product</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;