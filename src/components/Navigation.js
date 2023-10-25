import React from "react";
import { NavLink } from "react-router-dom";
import {
  aboutPath,
  contactPath,
  danaPath,
  homePath,
  beritaPath,
  layananPath,
  pinjamanPath,
  rootPath,
} from "../routes";
import { FaTimes } from "react-icons/fa";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/logo.jpg";

const Navigation = React.forwardRef(({ showNavbar, hideNavbar }, ref) => {
  return (
    <div>
      <Navbar
        className="navigation"
        bg="light"
        data-bs-theme="light"
        fixed="top"
        ref={ref}
      >
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
            <NavLink to={rootPath} onClick={hideNavbar}>
              Beranda
            </NavLink>

            <NavLink to={aboutPath} onClick={hideNavbar}>
              Tentang
            </NavLink>

            <NavDropdown title="Produk" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to={layananPath} onClick={hideNavbar}>
                  Layanan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={danaPath} onClick={hideNavbar}>
                  Dana
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={pinjamanPath} onClick={hideNavbar}>
                  Pinjaman
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to={beritaPath} onClick={hideNavbar}>
              Berita
            </NavLink>

            <NavLink to={contactPath} onClick={hideNavbar}>
              Kontak
            </NavLink>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
});

export default Navigation;
