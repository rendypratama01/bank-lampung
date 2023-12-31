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
  layananPath,
  danaPath,
  rootPath,
  pinjamanPath,
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
                href={layananPath}
                className={location.pathname === layananPath ? "active" : ""}
              >
                Layanan
              </NavDropdown.Item>
              <NavDropdown.Item
                href={danaPath}
                className={location.pathname === danaPath ? "active" : ""}
              >
                Dana
              </NavDropdown.Item>
              <NavDropdown.Item
                href={pinjamanPath}
                className={location.pathname === pinjamanPath ? "active" : ""}
              >
                Pinjaman
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to={contactPath}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Kontak
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
