import React from "react";
import kreditPerorangan from "../assets/img/pinjaman/kredit-perorangan.png";

function KreditPeroranganPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Perorangan</h3>
        <p>
          Kredit Perorangan (Personal Loan) adalah Kredit yang diberikan kepada
          calon debitur berpenghasilan tetap maupun penghasilan tidak tetap guna
          menunjang pekerjaan
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditPerorangan}
            alt="Logo kredit perorangan"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-benefit">
            <h4>Manfaat</h4>
            <ol type="1">
              <li>Proses kredit cepat</li>
              <li>Persyaratan kredit ringan</li>
              <li>
                Memenuhi kebutuhan Konsumtif atau Produktif (Pembelian Peralatan
                Kerja untuk menunjang profesi)
              </li>
              <li>
                Angsuran kredit per bulan yang ringan & suku bunga bersaing
              </li>
              <li>Kredit dilengkapi dengan perlindungan asuransi</li>
            </ol>
          </div>
          <div className="pinjaman-item_detail-requirement">
            <h4>Persyaratan</h4>
            <ul type="disc">
              <li>Fotokopi E-KTP</li>
              <li>Pas Photo</li>
              <li>Fotokopi KK</li>
              <li>Buku nikah/Surat Keterangan Status (Sudah Menikah/ Cerai)</li>
              <li>Fotokopi rekening koran/ tabungan 3 (tiga) Bulan terakhir</li>
              <li>
                Fotokopi Slip Gaji terakhir suami istri bagi yang berpenghasilan
                tetap
              </li>
              <li>NPWP</li>
              <li>Fotokopi Jaminan yang akan diagunkan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditPeroranganPage;
