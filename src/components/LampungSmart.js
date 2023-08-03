import lsmart from "../assets/img/lsmart.png";

function LampungSmart() {
  return (
    <div className="lsmart-container">
      <h3>Lampung Smart</h3>
      <p>
        Agen Laku Pandai Bank Lampung . Layanan transaksi keuangan mandiri.
        Mitra perpanjangan tangan Bank Lampung dalam melayanani transaksi
        keuangan tanpa kantor.
      </p>
      <div className="lsmart-container_company-logo">
        <img src={lsmart} alt="Logo Lampung Smart" width="500px" />
      </div>
      <div className="lsmart-container_detail">
        <div className="lsmart-container_detail-feature">
          <div>
            <h4>Fitur dan Fasilitas</h4>
            <ol>
              <li>Informasi Rekening</li>
              <li>Transfer Antar Rekening dan Antar Bank</li>
              <li>Menu Pembayaran dan Pembelian</li>
              <ul type="disc">
                <li>Pulsa</li>
                <li>Paket Data</li>
                <li>Pajak Kendaraan Bermotor</li>
                <li>Pajak Bumi dan Bangunan</li>
                <li>Pembayaran Pajak Daerah Lainnya</li>
                <li>Token Listrik</li>
              </ul>
              <li>Pembukaan Rekening</li>
            </ol>
          </div>
        </div>
        <div className="lsmart-container_detail-requirement">
          <h4>Syarat Pendaftaran</h4>
          <ol>
            <li>E-KTP</li>
            <li>NPWP</li>
            <li>Izin Usaha (NIB, SIUP,SITU)</li>
            <li>Memiliki Rekening Tabungan / Giro Bank Lampung</li>
            <li>Memiliki Usaha Minimal 2 Tahun</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LampungSmart;
