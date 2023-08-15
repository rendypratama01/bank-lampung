import React from "react";
import kreditSigerDewan from "../assets/img/pinjaman/kredit-siger-dewan.png";

function KreditSigerDewanPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Siger Dewan</h3>
        <p>
          Kredit Siger Dewan merupakan fasilitas kredit kepada anggota Dewan
          Perwakilan Rakyat Daerah (DPRD) Provinsi, Kabupaten/Kota.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditSigerDewan}
            alt="Logo kredit siger dewan"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-benefit">
            <h4>Manfaat</h4>
            <ol type="1">
              <li>Persyaratan kredit ringan</li>
              <li>Proses kredit cepat dan mudah</li>
              <li>Bebas digunakan untuk keperluan konsumtif</li>
              <li>Angsuran ringan dan suku bunga bersaing</li>
            </ol>
          </div>
          <div className="pinjaman-item_detail-requirement">
            <h4>Persyaratan</h4>
            <ul type="disc">
              <li>
                Buku Aplikasi Kredit Pantas yang telah diisi dengan baik dan
                benar
              </li>
              <li>Pas Photo ukuran 4x6 sebanyak 2 (dua) Lembar</li>
              <li>Fotokopi E-KTP Suami Istri</li>
              <li>Fotokopi KK</li>
              <li>
                Fotokopi NCR gaji terakhir yang telah dilegalisir bendahara
              </li>
              <li>Fotokopi NPWP (pinjaman diatas Rp. 100.000.000,-)</li>
              <li>
                Fotokopi SK Pengangkatan Anggota Dewan yang telah dilegalisir
                Sekretaris Dewan
              </li>
              <li>Fotokopi Kartu Tanda Anggota (KTA) Dewan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditSigerDewanPage;
