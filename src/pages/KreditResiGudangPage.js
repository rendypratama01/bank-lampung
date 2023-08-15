import React from "react";
import kreditResiGudang from "../assets/img/pinjaman/kredit-resi-gudang.png";

function kreditResiGudangPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>Kredit Resi Gudang</h3>
        <p>
          Kredit Resi Gudang adalah kredit yang diberikan kepada pemegang resi
          gudang yang merupakan pemilik barang atau pihak yang menerima
          pengalihan dari pemilik barang atau pihak lain yang menerima
          pengalihan lebih lanjut dari gudang yang telah ditunjuk Pemerintah.
        </p>
        <div className="pinjaman-item_logo">
          <img src={kreditResiGudang} alt="Logo resi gudang" width="500px" />
        </div>
        <div className="pinjaman-item_detail">
          <div className="pinjaman-item_detail-benefit">
            <h4>Manfaat</h4>
            <ol type="1">
              <li>
                Memenuhi kebutuhan para pelaku usaha dalam mengembangkan
                kegiatan usahanya.
              </li>
              <li>Persyaratan kredit ringan dan mudah</li>
              <li>Proses cepat</li>
              <li>Untuk KUR Mikro tanpa ada pembatasan akumulasi plafond</li>
            </ol>
          </div>
          <div className="pinjaman-item_detail-requirement">
            <h4>Persyaratan</h4>
            <ol type="1">
              <li>Perorangan (Petani)</li>
              <ul type="disc">
                <li>Aplikasi permohonan</li>
                <li>Fotocopy Kartu Tanda Penduduk (KTP) & pasangan.</li>
                <li>
                  Surat Keterangan Usaha dari Kepala Desa / Lurah setempat.
                </li>
                <li>Rekapitulasi Komoditi/ barang dalam gudang.</li>
                <li>
                  Fotokopi bukti Resi Gudang yang masih berlaku, sedangkan yang
                  asli akan diserahkan sebelumak akad kredit.
                </li>
              </ul>
              <li>Kelompok Tani</li>
              <ul type="disc">
                <li>Aplikasi permohonan.</li>
                <li>
                  Fotocopy Kartu Tanda Penduduk pengurus dan anggota kelompok
                  tani.
                </li>
                <li>
                  Memiliki pengurus aktif, minimal ketua, sekretaris, dan
                  bendahara.
                </li>
                <li>
                  Surat Keterangan Kelompok Tani bermaterai cukup yang diketahui
                  oleh instansi terkait.
                </li>
                <li>
                  Surat kuasa dari anggota kelompok tani yang menunjuk Ketua
                  Kelompok dari anggota
                </li>
                <li>Organisasi telah berjalan minimal 1 (satu) tahun</li>
                <li>Rekapitulasi Komoditi/ barang dalam gudang.</li>
                <li>
                  Fotokopi bukti Resi Gudang yang masih berlaku, sedangkan yang
                  asli akan diserahkan sebelumak akad kredit.
                </li>
              </ul>
              <li>Gabungan Kelompok Tani</li>
              <ul type="disc">
                <li>Aplikasi permohonan.</li>
                <li>
                  Memiliki pengurus aktif, minimal ketua, sekretaris, dan
                  bendahara.
                </li>
                <li>
                  Surat kuasa dari anggota gabungan kelompok tani yang menunjuk
                  Ketua gabungan Kelompok tani
                </li>
                <li>
                  Fotocopy Kartu Tanda Penduduk pengurus dan anggota kelompok
                  tani.
                </li>
                <li>
                  Peraturan Gabungan Kelompok tani yang disepakati oleh seluruh
                  anggota
                </li>
                <li>
                  Surat Keterangan Gabungan Kelompok Tani bermaterai cukup yang
                  diketahui oleh instansi terkait.
                </li>
                <li>Organisasi telah berjalan minimal 1 (satu) tahun</li>
                <li>Rekapitulasi Komoditi/ barang dalam gudang.</li>
                <li>
                  Fotokopi bukti Resi Gudang yang masih berlaku, sedangkan yang
                  asli akan diserahkan sebelumak akad kredit.
                </li>
              </ul>
              <li>Koperasi</li>
              <ul type="disc">
                <li>
                  Surat pengesahan badan hukum koperasi dari instansi yang
                  berwenang
                </li>
                <li>
                  Anggaran dasar dan anggaran rumah tangga yang memuat kegiatan
                  antara lain kegiatan usaha di sektor pertanian
                </li>
                <li>Berita acara rapat anggota tahunan maksimal 1 tahun</li>
                <li>Daftar anggota yang terdiri dari petani</li>
                <li>Fotokopi Identitas seluruh anggota koperasi</li>
                <li>Koperasi telah beroperasi minimal 2 (dua) tahun.</li>
                <li>
                  Memiliki ijin usaha resmi (SIUP/Ijin Prinsip/Ijin Usaha)
                </li>
                <li>Rekapitulasi Komoditi/ barang dalam gudang.</li>
                <li>
                  Fotokopi bukti Resi Gudang yang masih berlaku, sedangkan yang
                  asli akan diserahkan sebelumak akad kredit.
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default kreditResiGudangPage;
