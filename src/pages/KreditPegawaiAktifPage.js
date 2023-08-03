import React from "react";
import kreditPantasPegawaiAktif from "../assets/img/pinjaman/kredit-pantas-pegawai-aktif.png";

function KreditPegawaiAktifPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Pantas Pegawai Aktif</h3>
        <p>
          Kredit Pantas Pegawai Aktif merupakan fasilitas kredit pegawai yang
          diperuntukkan bagi Calon Pegawai Negeri Sipil (CPNS)/ PNS Otonomi
          Daerah/Vertikal atau Pusat, dan Pegawai tetap BUMN/BUMD/Lembaga/
          Swasta.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditPantasPegawaiAktif}
            alt="Logo kredit pantas pegawai aktif"
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
              <li>Kredit dilengkapi dengan perlindungan asuransi</li>
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
              <li>
                Asli Sk Pengangkatan Pegawai (SK 100%) atau Asli Sk
                Kepangkatan/Jabatan Terakhir
              </li>
              <li>Fotokopi NPWP (pinjaman diatas Rp. 100.000.000,-)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditPegawaiAktifPage;
