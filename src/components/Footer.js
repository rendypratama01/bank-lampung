import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { danaPath, layananPath, pinjamanPath } from "../routes";

export default function Footer() {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="footer-info">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    alt=""
                    src={logo}
                    height="50"
                    className="d-inline-block align-top"
                  />
                </h6>
                <p>
                  Bank Lampung KCP Menggala adalah salah satu cabang Bank
                  Pembangunan Daerah (BPD) yang berlokasi di daerah Menggala,
                  Lampung.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to={layananPath} className="text-reset">
                    Layanan
                  </Link>
                </p>
                <p>
                  <Link to={danaPath} className="text-reset">
                    Dana
                  </Link>
                </p>
                <p>
                  <Link to={pinjamanPath} className="text-reset">
                    Pinjaman
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Profil
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Visi Misi
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nilai Perusahaan
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Struktur Organisasi
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Menggala Sel., Menggala, Kabupaten Tulangbawang, Lampung
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  komunikasi@banklampung.co.id
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />
                  1500575
                </p>
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
