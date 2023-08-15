import React from "react";
import Pinjaman from "../components/Pinjaman";

function PinjamanPage() {
  return (
    <div className="pinjaman-container">
      <div className="pinjaman-container-title">
        <h3>Pinjaman</h3>
        <p>
          Produk kredit Bank Lampung adalah solusi finansial yang memungkinkan
          nasabah untuk mendapatkan dana pinjaman sesuai dengan kebutuhan
          mereka. Bank Lampung menawarkan berbagai jenis kredit, termasuk Kredit
          Usaha yang mendukung perkembangan bisnis, Kredit Pribadi untuk
          keperluan individu, dan Kredit Perumahan untuk pembelian atau
          pembangunan rumah.
        </p>
      </div>
      <div>
        <h5>List Product Layanan</h5>
        <Pinjaman />
      </div>
    </div>
  );
}

export default PinjamanPage;
