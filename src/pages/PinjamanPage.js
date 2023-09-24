import React from "react";
import Pinjaman from "../components/Pinjaman";
import logopinjaman from "../assets/img/logopinjaman.png";

function PinjamanPage() {
  return (
    <div className="pinjaman-container">
      <div className="pinjaman-container-title">
        <h3>Pinjaman</h3>
        <div className="pinjaman-container_item">
          <div className="pinjaman-container_item-image">
            <img src={logopinjaman} alt="logo pinjaman"></img>
          </div>
          <div className="pinjaman-container_item-text">
            <p>
              Produk kredit Bank Lampung adalah solusi finansial yang
              memungkinkan nasabah untuk mendapatkan dana pinjaman sesuai dengan
              kebutuhan mereka. Bank Lampung menawarkan berbagai jenis kredit,
              termasuk Kredit Usaha yang mendukung perkembangan bisnis, Kredit
              Pribadi untuk keperluan individu, dan Kredit Perumahan untuk
              pembelian atau pembangunan rumah.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5>List Product Pinjaman</h5>
        <Pinjaman />
      </div>
    </div>
  );
}

export default PinjamanPage;
