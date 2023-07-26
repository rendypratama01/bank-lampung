import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import {
  aboutPath,
  homePath,
  contactPath,
  rootPath,
  servicePath,
} from "../routes";

function NavigationBar() {
  const location = useLocation();

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
            <NavLink
              to={rootPath}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Beranda
            </NavLink>
            <NavLink
              to={aboutPath}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Tentang
            </NavLink>
            <NavDropdown title="Produk" id="basic-nav-dropdown">
              <NavDropdown.Item
                href={servicePath}
                className={location.pathname === servicePath ? "active" : ""}
              >
                Layanan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to={contactPath}
              className={location.pathname === contactPath ? "active" : ""}
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
