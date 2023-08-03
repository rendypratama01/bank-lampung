import qlau from "../assets/img/pinjaman/qlau.jpg";

function Qris() {
  return (
    <div className="qris-container">
      <h3>Qris</h3>
      <p>
        Aplikasi QRIS adalah aplikasi milik PT Bank Pembangunan Daerah Lampung
        (“Bank Lampung”) yang diperuntukkan bagi Merchant untuk mengelola
        transaksi pembayaran dari Pelanggan Merchant (“Pelanggan Merchant”) yang
        dilakukan melalui pemindaian QR Code yang telah memiliki standar
        Nasional QR Code Pembayaran.
      </p>
      <div className="qris-container_company-logo">
        <img src={qlau} alt="Logo Qris" width="500px" />
      </div>
      <div className="qris-container_detail">
        <div className="qris-container_detail-feature">
          <div>
            <h4>Fitur dan Fasilitas</h4>
            <ol>
              <li>
                Fitur Layanan Untuk Transaksi Pembayaran (Quick Response Code
                Indonesia Standar) di Merchant Bank Lampung yag terdapat di
                pusat pembelanjaan dan toko
              </li>
            </ol>
          </div>
        </div>
        <div className="qris-container_detail-requirement">
          <h4>Syarat Pendaftaran</h4>
          <ol>
            <li>Mempunyai Rekening (Tabungan Simpeda atau L Save)</li>
            <li>Memiliki Smartphone</li>
            <li>Memiliki KTP atau Kartu keluarga</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Qris;
