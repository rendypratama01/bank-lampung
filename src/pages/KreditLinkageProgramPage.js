import React from "react";
import kreditLinkageProgram from "../assets/img/pinjaman/kredit-linkage-program.png";

function KreditLinkageProgramPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Linkage Program</h3>
        <p>
          Kredit Linkage Program adalah fasilitas kredit kepada Lembaga Keuangan
          dengan cara melakukan aliansi strategis dengan BPR & Koperasi untuk
          mencapai sinergi dalam peningkatan ekspansi kredit melalui pola
          Excetuting dan/ atau Pola Channeling.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={kreditLinkageProgram}
            alt="Logo kredit linkage program"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-information">
            <h4>Informasi</h4>
            <p>Jangka Waktu : maksimum sampai dengan 10 Tahun</p>
            <p>Agunan</p>
            <ol type="1">
              <li>Agunan Utama (Usaha Debitur)</li>
              <li>Agunan Tambahan :</li>
              <ol type="a">
                <li>Aset Tetap (SHM, SHGB, SHGU, SHSRS)</li>
                <li>Cessie/piutang end user</li>
                <li>Cash Collateral</li>
                <li>Barang Bergerak (Kendaraan & Alat Berat)</li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default KreditLinkageProgramPage;
