import React from "react";
import rekeningKoran from "../assets/img/pinjaman/rekening-koran.png";

function RekeningKoranPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Rekening Koran</h3>
        <p>
          Rekening Koran adalah fasilitas kredit yang diberikan kepada pelaku
          usaha, baik UMKM (mikro, ritel komersional, dan menengah) maupun
          korporat, dalam rangka pembiayaan terhadap modal kerja. Dimana
          penyetoran dan penarikan dananya dapat dilakukan dengan menggunakan
          semua fasilitas transaksi yang disediakan pada rekening giro, yaitu
          cek dan bilyet giro.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={rekeningKoran}
            alt="Logo kredit linkage program"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-information">
            <h4>Produk</h4>
            <ul type="disc">
              <li>
                <strong>KMK RK CO. Tetap</strong> adalah Fasilitas KMK Revolving
                yang dapat dicairkan hingga mencapai plafond tertentu tergantung
                kebutuhan debitur dimana perhitungan bunga KMK tersebut
                berdasarkan outstanding kredit harian sehingga pembayaran
                angsuran berapa hari pokok plafond kredit tersebut digunakan
                debitur.
              </li>
              <li>
                <strong>KMK RK CO. Menurun</strong> adalah Fasilitas KMK Non -
                Revolving kepada usaha debitur yang berada pada tahap maturity
                menuju decline namun masih memiliki aliran kas yang baik dan
                sehat pada saat permohonan awal.
              </li>
            </ul>
          </div>
          <div className="pinjaman-item_detail-requirement">
            <h4>Ketentuan</h4>
            <p>
              Jangka Waktu : 1 Tahun (dapat diperpanjang berdasarkan penelian
              Bank)
            </p>
            <p>Agunan :</p>
            <ol type="1">
              <li>Agunan Utama (Usaha Debitur)</li>
              <li>Agunan Tambahan :</li>
              <ol type="a">
                <li>Aset Tetap (SHM, SHGB, SHGU, SHSRS)</li>
                <li>Barang Bergerak (Kendaraan & Alat Berat)</li>
                <li>Cash Collateral</li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default RekeningKoranPage;
