import React from "react";
import kmkKonstruksiDeveloper from "../assets/img/pinjaman/k-m-k-konstruksi-developer.png";

function KmkKonstruksiDeveloperPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>KMK Konstruksi Developer</h3>
        <p>
          Fasilitas Kredit Yang Diberikan Kepada Individu Atau Badan Usaha Untuk
          Pembiayaan Modal Kerja Yang Habis Dalam Satu Siklus Usaha Dan Dapat
          Diperpanjang Sesuai Kebutuhan.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kmkKonstruksiDeveloper}
            alt="Logo kmk konstruksi developer"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-information">
            <h4>Ketentuan</h4>
            <p>Jangka Waktu : maksimum sampai dengan 3 Tahun</p>
            <p>Agunan</p>
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

export default KmkKonstruksiDeveloperPage;
