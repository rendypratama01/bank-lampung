import React from "react";
import bankGaransi from "../assets/img/pinjaman/bank-garansi.png";

function BankGaransiPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Bank Garansi</h3>
        <p>
          Bank Garansi adalah jaminan yang diberikan oleh Penjamin/ Bank kepada
          penerima jaminan apabila pihak terjamin melakukan wanprestasi.
        </p>
        <div className="pinjaman-item_logo">
          <img
            src={bankGaransi}
            alt="Logo kredit linkage program"
            width="500px"
          />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-information">
            <h4>Jenis Bank Garansi</h4>
            <ol type="1">
              <li>Bank Garansi Penawaran (Bid Bond)</li>
              <li>Bank Garansi Pelaksanaan (Performance Bond)</li>
              <li>Bank Garansi Uang Muka (Advance Payment Bond)</li>
              <li>Bank Garansi Pemeliharaan (Maintenance Bond)</li>
              <li>Bank Garansi Lainnya</li>
            </ol>
          </div>
          <div className="pinjaman-item_detail-information">
            <h4>Jangka Waktu</h4>
            <p>
              1 (satu) Tahun atau lebih dari 1 (satu) Tahun sesuai dengan
              permohonan debitur dan dapat diperpanjang, sesuai dengan adendum
              pekerjaan/ jangka waktu proyek.
            </p>
          </div>
          <div className="pinjaman-item_detail-information">
            <h4>Jaminan</h4>
            <ol type="1">
              <li>Jaminan Utama (proyek atau usaha yang dikerjakan)</li>
              <li>Jaminan Tambahan / agunan :</li>
              <ul type="disc">
                <li>
                  Cash Collateral seperti Bilyet Deposito, Tabungan dan Giro.
                </li>
                <li>Back to Back Guarantee</li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankGaransiPage;
