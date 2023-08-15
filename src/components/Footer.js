import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import logo from "../assets/img/logo.png";
import {
  aboutPath,
  contactPath,
  danaPath,
  homePath,
  layananPath,
  pinjamanPath,
} from "../routes";

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="footer-info">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol sm="9" md="6" lg="3" xl="4" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBNavbarLink href={homePath}>
                    <img
                      alt=""
                      src={logo}
                      height="50"
                      className="d-inline-block align-top"
                    />
                  </MDBNavbarLink>
                </h6>
                <div className="desk-footer">
                  <p>
                    Bank Lampung KCP Menggala adalah salah satu cabang Bank
                    Pembangunan Daerah (BPD) yang berlokasi di daerah Menggala,
                    Lampung.
                  </p>
                </div>
              </MDBCol>

              <MDBCol sm="4" md="6" lg="2" xl="2" className="mx-auto mb-4">
                <div className="info-footer">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <div className="desk-footer">
                    <p>
                      <a href={layananPath} className="text-reset">
                        Layanan
                      </a>
                    </p>
                    <p>
                      <a href={danaPath} className="text-reset">
                        Dana
                      </a>
                    </p>
                    <p>
                      <a href={pinjamanPath} className="text-reset">
                        Pinjaman
                      </a>
                    </p>
                  </div>
                </div>
              </MDBCol>

              <MDBCol sm="4" md="6" lg="2" xl="2" className="mx-auto mb-4">
                <div className="info-footer">
                  <h6 className="text-uppercase fw-bold mb-4">About</h6>
                  <div className="desk-footer">
                    <p>
                      <a href={aboutPath} className="text-reset">
                        Profil
                      </a>
                    </p>
                    <p>
                      <a href={aboutPath} className="text-reset">
                        Visi Misi
                      </a>
                    </p>
                    <p>
                      <a href={aboutPath} className="text-reset">
                        Nilai Perusahaan
                      </a>
                    </p>
                    <p>
                      <a href={aboutPath} className="text-reset">
                        Struktur Organisasi
                      </a>
                    </p>
                  </div>
                </div>
              </MDBCol>

              <MDBCol
                sm="10"
                md="6"
                lg="3"
                xl="4"
                className="mx-auto mb-md-0 mb-4"
              >
                <div className="info-footer">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <div className="desk-footer">
                    <p>
                      <MDBIcon color="primary" icon="home" className="me-3" />
                      <MDBNavbarLink href={contactPath}>
                        Menggala Sel., Menggala, Kabupaten Tulangbawang, Lampung
                      </MDBNavbarLink>
                    </p>
                    <p>
                      <MDBIcon
                        color="primary"
                        icon="envelope"
                        className="me-3"
                      />
                      <MDBNavbarLink href={contactPath}>
                        kcpmenggala@gmail.co.id
                      </MDBNavbarLink>
                    </p>
                    <p>
                      <MDBIcon
                        color="primary"
                        icon="clock"
                        className="me-3"
                      />
                      <MDBNavbarLink href={contactPath}>(08.00-15.00)</MDBNavbarLink>
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "#28317e", color: "#fff" }}
        >
          Bank Lampung © 2023 Copyright
          <br />
          All rights reserved
        </div>
      </MDBFooter>
    </div>
  );
}
