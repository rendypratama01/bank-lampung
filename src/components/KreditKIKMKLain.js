import React from "react";
import kreditKmkLainnya from "../assets/img/pinjaman/kredit-kmk-lainnya.png";

function KreditKIKMKLain() {
  return (
    <div className="pinjaman-item-container">
      <h3>Kredit KI/KMK Lainnya</h3>
      <p>
        Merupakan salah satu fasilitas kredit modal kerja dan investasi Bank
        Lampung dengan plafond pinjaman yang besar.
      </p>
      <div className="pinjaman-item_logo">
        <img
          src={kreditKmkLainnya}
          alt="Logo kredit kmk lainnya"
          width="500px"
        />
      </div>
      <div className="pinjaman-item_detail">
        <div className="pinjaman-item_detail-benefit">
          <h4>Manfaat</h4>
          <ol type="1">
            <li>Proses kredit cepat dan mudah</li>
            <li>Persyaratan kredit ringan</li>
            <li>Memenuhi kebutuhan modal kerja atau investasi usaha</li>
            <li>Angsuran kredit per bulan yang ringan & suku bunga bersaing</li>
            <li>Plafond ? Rp. 200.000.000,-</li>
            <li>Biaya administrasi yang murah</li>
          </ol>
        </div>
        <div className="pinjaman-item_detail-requirement">
          <h4>Persyaratan</h4>
          <ol type="1">
            <li>
              <strong>Perorangan atau Badan Usaha Perorangan</strong>
            </li>
            <ul type="disc">
              <li>Fotokopi KTP</li>
              <li>Fotokopi KK</li>
              <li>Buku Nikah/Surat Keterangan Status (Sudah Menikah/ Cerai)</li>
              <li>Surat Keterangan Usaha (SKU)</li>
              <li>SPT PBB tahun terakhir dari jaminan</li>
              <li>Kredit mulai Rp. 100.000.000,- dipersyaratkan :</li>
              <li>NPWP</li>
              <li>
                Legalitas Usaha seperti : SIUP, TDP, SITU, atau lainnya sesuai
                dengan bidang usaha
              </li>
              <li>SPT Pajak selama 2 (dua) tahun terakhir</li>
              <li>Fotokopi Jaminan yang akan diagunkan</li>
            </ul>
            <li>
              <strong>Kelompok</strong>
            </li>
            <ul type="disc">
              <li>Anggota melakukan kegiatan produktif</li>
              <li>Kelompok telah terdaftar pada Dinas Teknis setempat</li>
              <li>Kelompok memiliki organisasi dengan pengurus yang aktif</li>
              <li>
                Mempunyai aturan kelompok yang disepakati oleh seluruh anggota
                kelompok
              </li>
              <li>
                Sesuai SLIK OJK diketahui bahwa pengurus dan anggota kelompok
                tidak memiliki kredit bermasalah
              </li>
              <li>Surat Keterangan Usaha (SKU)</li>
              <li>Identitas diri pengurus dan anggota berupa :</li>
              <li>Fotokopi KTP</li>
              <li>Fotokopi KK</li>
              <li>Fotokopi Buku Nikah/Surat keterangan status</li>
              <li>Melampirkan RAB (rencana anggaran belanja)</li>
              <li>Daftar susunan pengurus kelompok</li>
              <li>Fotokopi NPWP untuk pinjaman diatas Rp. 100.000.000,-</li>
              <li>
                Diwajibkan membuka rekening tabungan/giro Bank Lampung atas nama
                Kelompok usaha
              </li>
              <li>Fotokopi bukti kepemilikan agunan yang akan diserahkan</li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default KreditKIKMKLain;
