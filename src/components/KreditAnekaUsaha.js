import React from "react";
import kreditAnekaUsaha from "../assets/img/pinjaman/kredit-aneka-usaha.png";

function KreditAnekaUsaha() {
  return (
    <div className="kreditanekausaha-container">
      <h3>Kredit Aneka Usaha</h3>
      <p>
        Kredit ANEKA USAHA (KAU) adalah kredit yang diberikan kepada usaha-usaha
        produktif segmen Mikro untuk membiayai kebutuhan usaha produktif baik
        untuk kebutuhan investasi maupun kebutuhan modal kerja.
      </p>
      <div className="kreditanekausaha-container_logo">
        <img
          src={kreditAnekaUsaha}
          alt="Logo kredit aneka usaha"
          width="500px"
        />
      </div>
      <div className="kreditanekausaha-container_detail">
        <div className="kreditanekausaha-detail_information">
          <h4>Informasi</h4>
          <p>
            Kredit Aneka Usaha (KAU) adalah kredit yang diberikan kepada
            usaha-usaha produktif segmen Mikro untuk membiayai kebutuhan usaha
            produktif baik untuk kebutuhan investasi maupun kebutuhan modal
            kerja.
          </p>
          <ul>
            <li>Plafond Kredit Aneka Usaha sd Rp.500.000.000</li>
            <li>Suku Bunga 14 % per tahun</li>
            <li>
              Kredit Aneka Usaha telah dilakukan revisi untuk penambahan produk
              Kredit KMK Aneka Usaha Rekening Koran dengan suku bunga 11-14% per
              tahun
            </li>
          </ul>
        </div>
        <div className="kreditanekausaha-detail_benefit">
          <h4>Manfaat</h4>
          <ol type="1">
            <li>Proses kredit cepat</li>
            <li>Persyaratan kredit ringan</li>
            <li>Memenuhi kebutuhan modal kerja atau investasi usaha anda</li>
            <li>Angsuran kredit per bulan yang ringan & suku bunga bersaing</li>
            <li>
              Diberikan pembekalan mengenai kiat usaha yang bisa mendatangkan
              profit
            </li>
            <li>
              Diberikan pendampingan pengelolaan manajemen keuangan bagi usaha
              mikro
            </li>
            <li>Biaya administrasi yang murah</li>
          </ol>
        </div>
        <div className="kreditanekausaha-detail_requirement">
          <h4>Persyaratan</h4>
          <ol type="1">
            <li>
              <strong>Perorangan atau Badan Usaha Perorangan</strong>
            </li>
            <ul type="disc">
              <li>Fotokopi KTP</li>
              <li>Fotokopi KK</li>
              <li>Buku nikah/Surat Keterangan Status (Sudah Menikah/ Cerai)</li>
              <li>Surat Keterangan Usaha (SKU)</li>
              <li>SPT PBB tahun terakhir dari jaminan</li>
              <li>Kredit mulai Rp. 100.000.000,- dipersyaratkan :</li>
              <li>NPWP</li>
              <li>
                Legalitas Usaha seperti : SIUP, TDP, SITU, atau lainnya sesuai
                dengan bidang usaha
              </li>
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
              <li>Surat Keterangan Usaha (SKU)</li>
              <li>Identitas diri pengurus dan anggota berupa :</li>
              <li>Fotokopi KTP</li>
              <li>Fotokopi KK</li>
              <li>Fotokopi buku nikah/Surat keterangan status</li>
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

export default KreditAnekaUsaha;
