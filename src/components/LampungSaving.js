import lsave from "../assets/img/lsave.png";

function LampungSaving() {
  return (
    <div className="lsaving-container">
      <h3>Lampung Saving</h3>
      <p>
      L Saving (Lampung Save) merupakan tabungan bisnis yang
              diperuntukan untuk nasbah perorangan.
      </p>
      <div className="lsaving-container_company-logo">
        <img src={lsave} alt="Logo Lampung Smart" width="500px" />
      </div>
      <div className="lsaving-container_detail">
        <div className="lsaving-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ul type="none">
              <li>Hanya Dengan setoran awal 1 Juta Rupiah, maka anda dapat menikmati fasilitas:</li>
              <ol>
                <li>Bebas Biaya admin (untuk saldo minimum Rp 20.000.000)</li>
                <li>Limit tranfer lebih besar</li>
                <li>Undian Lokal per Kabupaten/Kota</li>
                <li>Dilengkapi fasilitas ATM/Debit, sms banking & mobile banking</li>
                <li>Dapat dijadikan jaminan kredit</li>
                <li>Dijamin LPS</li>
                <li>Bunga simpanan kompetitif</li>
              </ol>
            </ul>
          </div>
        </div>
        <div className="lsaving-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>NPWP</li>
            <li>Tabungan Premium yang diperuntukkan untuk nasabah perorangan.</li>
            <li>Setoran awal minimum Rp 1.000.000,- (Satu juta rupiah).</li>
            <li>Saldo minimum Rp 200.000,- (Dua ratus ribu rupiah) per hari setiap bulannya.</li>
            <li>Nasabah Tabungan Reguler yang akan melakukan upgrade menjadi tabungan L-Save dengan syarat sebagaimana poin 2 dan 3, akan dibukakan rekening baru Tabungan L-Save.</li>
            <li>Sebagai bukti kepemilikan, Bank menerbitkan Butu Tabungan dan/atau Kartu ATM/Debit.</li>
            <li>Apabila terdapat perbedaan saldo antara Buku Tabungan dengan saldo yang tercatat pada administrasi Bank, maka yang dipergunakan adalah saldo yang tercatat pada administrasi Bank, kecuali dapat dibuktikan sebaliknya.</li>
            <li>Jika pemilik Rekening meninggal dunia, maka saldo Tabungan akan dibayarkan kepada ahli waris yang sah, yang dilaksanakan sesuai dengan ketentuan Bank.</li>
            <li>Apabila terdapat perubahan alamat, tanda tangan, atau data nasabah, pemilik rekening wajib memberitahukan kepada Cabang Penerbit.</li>
            <li>Setiap pemilik rekening diberikan kesempatan yang sama untuk mengikuti undian tabungan yang dilakukan oleh Bank. Persyaratan dan tata cara undian diatur dalam ketentuan tersendiri.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LampungSaving
