import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import {
  aboutPath,
  homePath,
  contactPath,
  layananPath,
  danaPath,
  rootPath,
} from "../routes";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <NavbarBrand href={rootPath}>
            <img
              to={homePath}
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <Nav>
            <NavLink to={homePath}>Beranda</NavLink>
            <NavLink to={aboutPath}>Tentang</NavLink>
            <NavDropdown title="Produk" id="basic-nav-dropdown">
              <NavDropdown.Item href={layananPath}>Layanan</NavDropdown.Item>
              <NavDropdown.Item href={danaPath}>Dana</NavDropdown.Item>
            </NavDropdown>
            <NavLink to={contactPath}>Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
