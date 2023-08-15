import simpel from "../assets/img/simpel.png";

function SimpananPelajar() {
  return (
    <div className="simpel-container">
      <h3>Simpanan Pelajar</h3>
      <p>
        Tabungan untuk siswa/pelajar yang ditertibkan oleh Bank Lampung dengan
        persyaratan mudah dan sederhana serta fitur yang menarik, dalam rangka
        edukasi dan inklusi keuangan untuk mendorong budaya menabung sejak dini.
      </p>
      <div className="simpel-container_company-logo">
        <img src={simpel} alt="Logo Simpanan Pelajar" width="400px" />
      </div>
      <div className="simpel-container_detail">
        <div className="simpel-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ol>
              <li>Saldo minimun sangat kecil</li>
              <li>
                Transaksi tabungan dapat dilakukan secara online diseluruh
                Kantor Bank Lampung
              </li>
              <li>Biaya Saldo Minimum Gratis</li>
              <li>Biaya Administrasi Gratis</li>
              <li>Memperoleh kartu ATM (pilihan)</li>
              <li>Memperoleh buku tabungan</li>
              <li>Diberikan bonus/gimmick</li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="simpel-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>Kartu Pelajar atau Kartu Keluarga</li>
            <li>Setoran awal minimum Rp 5.000,-</li>
            <li>Tabungan perorangan untuk siswa Warga Negara Indonesia</li>
            <li>
              Diperuntukan bagi siswa PAUD, TK, SMP, SMA, Madrasah (MI,MTs,MA)
              atau sederajat, yang berusia dibawah 17 tahun dan belum memiliki
              KTP
            </li>
            <li>
              Pembukaan rekening dilakukian melalui kerjasama antara sekolah
              dengan Bank, ataupun dapat dilakukan tanpa perjanjian kerjasama
            </li>
            <li>Sekolah dapat bekerjasama lebih dari 1 ( satu ) bank</li>
            <li>
              Orang Tua/Wali dapat memberi kuasa kepada sekolah ( pejabat
              sekolah yang ditunjuk ) atau pihak lain untuk pembukaan rekening
              SimPel
            </li>
            <li>
              Satu siswa hanya diperkenankan memiliki 1 ( satu ) rekening SimPel
            </li>
            <li>Diberikan kartu ATM ( optional )</li>
            <li>Tidak diperkenankan rekening bersama ( Join Account)</li>
            <li>
              Transaksi penarikan,penyetoran dan pemindahbukuan dapat dilayani
              di sekolah dan semua channel bank sesuai ketentuan
            </li>
            <li>Nama rekening danh CIF adalah nama siswa</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SimpananPelajar;
