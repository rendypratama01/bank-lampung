import React from "react";
import kmkKiKur from "../assets/img/pinjaman/kmk-ki-kur.png";

function KiKmkKurPage() {
  return (
    <>
      <div className="pinjaman-item-container">
        <h3>KMK/KI-KUR</h3>
        <p>
          Program pembiayaan modal kerja dan investasi melalui perbankan yang
          mendapatkan subsidi dari Pemerintah untuk membantu para pelaku usaha
          meningkatkan dan mengembangkan kegiatan usahanya.
        </p>
        <div className="pinjaman-item_logo">
          <img src={kmkKiKur} alt="Logo kmk ki kur" width="500px" />
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
              <li>
                <strong>Perorangan</strong>
              </li>
              <ul type="disc">
                <li>Aplikasi permohonan</li>
                <li>Fotokopi Kartu Tanda Penduduk (KTP) & pasangan.</li>
                <li>Fotokopi Kartu Keluarga (KK)</li>
                <li>
                  Fotocopy Surat Nikah / Surat Cerai bagi calon debitur yang
                  telah berkeluarga/telah bercerai
                </li>
                <li>
                  Asli Surat Izin Usaha (IUMK) atau surat perizinan usaha Mikro
                  dan kecil
                </li>
                <li>
                  Bilamana dipersyaratkan agunan/jaminan tambahan, maka dapat
                  dilengkapi dengan : fotocopy dokumen agunan, fotocopy KTP
                  pemilik (suami-isteri) dan dokumen pendukung lainnya.{" "}
                </li>
                <li>
                  Pas photo ukuran 3x4 sebanyak 2 buah milik calon debitur dan
                  pasangan.{" "}
                </li>
                <li>
                  Print out mutasi rekening giro/tabungan di Bank
                  Lampung/lembaga keuangan lainnya dalam 6 bulan terakhir (bila
                  ada).
                </li>
              </ul>
              <li>
                <strong>Badan Usaha</strong>
              </li>
              <ul type="disc">
                <li>Aplikasi permohonan.</li>
                <li>
                  Fotocopy Kartu Tanda Penduduk Direksi (management) dan
                  Komisaris/Komanditer (pemilik).
                </li>
                <li>
                  Fotocopy Nomor Pokok Wajib Pajak (NPWP) atas nama badan usaha.
                </li>
                <li>Fotocopy SPT atas nama badan usaha.</li>
                <li>
                  Fotocopy Akta pendirian berikut perubahannya, sertai tanda
                  bukti pengesahan/pendaftaran pada instansi berwenang.
                </li>
                <li>
                  Fotocopy Surat Izin Usaha ( minimal memiliki SIUP, SITU, TDP).
                </li>
                <li>
                  Dokumen agunan/jaminan tambahan yang dilengkapi dengan :
                  fotocopy dokumen agunan, fotocopy KTP pemilik (suami-isteri)
                  dan dokumen pendukung lainnya seperti IMB/PBB/STNK/Hasil Cek
                  Fisik Kepolisian Kendaraan Bermotor/dsb.
                </li>
                <li>
                  Pas photo ukuran 3x4 sebanyak 2 buah milik Direksi dan
                  Komisaris/ Komanditer.
                </li>
                <li>
                  Print out mutasi rekening giro/tabungan di Bank
                  Lampung/lembaga keuangan lainnya atas nama badan usaha dalam 6
                  bulan terakhir (bila ada).
                </li>
                <li>
                  Print out mutasi rekening giro/tabungan di Bank
                  Lampung/lembaga keuangan lainnya atas nama Direksi dan
                  Komisrasi/Komanditer dalam 6 bulan terakhir (bila ada)
                </li>
                <li>
                  Fotocopy tabungan/print out rekening giro Bank Lampung atas
                  nama calon debitur
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default KiKmkKurPage;
