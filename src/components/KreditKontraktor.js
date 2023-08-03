import React from "react";
import kreditKontraktor from "../assets/img/pinjaman/kredit-kontraktor.png";

function KreditKontraktor() {
  return (
    <div className="pinjaman-item-container">
      <h3>Kredit Kontraktor</h3>
      <p>
        Kredit Kontraktor merupakan salah satu produk unggulan di segmen
        produktif pada PT. Bank Pembangunan Daerah Lampung, Kredit Modal Kerja
        Kontraktor merupakan fasilitas kredit yang diberikan kepada kontraktor
        atau konsultan untuk pembuatan atau penyelesaian atas pengadaan barang
        dan jasa atau suatu kegiatan konstruksi dari suatu proyek bangunan fisik
        dan non-fisik.
      </p>
      <div className="pinjaman-item_logo">
        <img
          src={kreditKontraktor}
          alt="Logo kredit kontraktor"
          width="500px"
        />
      </div>
      <div className="pinjaman-item_detail">
        <div className="pinjaman-item_detail-konstruksi">
          <h4>KMK Konstruksi Transaksional</h4>
          <p>
            Adalah kredit modal kerja yang diberikan pada Kontraktor atau
            Konsultan yang memperoleh kontrak pengadaan atau penyelesaian suatu
            proyek.
          </p>
          <p>
            Jangka Waktu : Sesuai jangka waktu pelaksanaan proyek yang dibiayai
            ditambah masa penagihan maksimal 3 (tiga) bulan/ Non Revoolving.
          </p>
          <p>Agunan :</p>
          <ol type="1">
            <li>Agunan Utama (SPK/KONTRAK)</li>
            <li>Agunan Tambahan</li>
            <ol type="a">
              <li>Aset Tetap (SHM, SHGB, SHGU, SHRSRS)</li>
              <li>Barang Bergerak (Kendaraan & Alat Berat)</li>
              <li>Cash Collateral</li>
            </ol>
          </ol>
        </div>
        <div className="pinjaman-item_detail-konstruksi">
          <h4>KMK Konstruksi Plafond</h4>
          <p>
            Adalah pemberian kredit modal kerja untuk kontraktor yang
            mengerjakan beberapa proyek dalam satu periode, serta bersifat
            rutin/ kontinyu. Pencairan/ penarikan KMK ini didasarkan pada proyek
            yang dikerjakan dan bersifat revolving. Setiap pembayaran termin/
            penyelesaian suatu proyek digunakan untuk menurunkan baki debet/
            outstanding KMK Jasa Konstruksi.
          </p>
          <p>Jangka Waktu : 12 Bulan</p>
          <p>Agunan :</p>
          <ol type="1">
            <li>Agunan Utama (SPK/KONTRAK)</li>
            <li>Agunan Tambahan</li>
            <ol type="a">
              <li>Aset Tetap (SHM, SHGB, SHGU, SHRSRS)</li>
              <li>Barang Bergerak (Kendaraan & Alat Berat)</li>
              <li>Cash Collateral</li>
            </ol>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default KreditKontraktor;
