import React from "react";
import kreditPantasPraPensiun from "../assets/img/pinjaman/kredit-pantas-pra-pensiun.png";

function KreditPantasPraPensiunPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Pantas Pra Pensiun</h3>
        <p>
          Kredit Pantas Pra Pensiun merupakan fasilitas kredit pegawai yang
          diperuntukkan bagi Pegawai Negeri Sipil (PNS) Otonomi Daerah hingga
          melewati batas masa aktif pegawai (Pensiun).
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditPantasPraPensiun}
            alt="Logo kredit pantas pra pensiun"
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
              <li>Pengurusan pembayaran pensiun dibantu oleh Bank Lampung</li>
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
              <li>Fotokopi NPWP (pinjaman diatas Rp. 100.000.000,-)</li>
              <li>
                Asli Sk Pengangkatan Pegawai (SK 100%) atau Asli Sk
                Kepangkatan/Jabatan Terakhir
              </li>
              <li>
                Surat pernyataan debitur kepada bank lampung mengenai kesedian
                dalam pengurusan pembayaran pensiun
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditPantasPraPensiunPage;
