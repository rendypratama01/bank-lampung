import lonline from "../assets/img/lonline.jpeg";

function LampungOnline() {
  return (
    <div className="lonline-container">
      <h3>Lampung Online</h3>
      <p>
        Sistem Aplikasi perbankan berbasis Mobile Application (android dan ios)
        yang digunakan oleh Nasabah untuk melakukan transaksi perbankan baik
        finansial maupun non finansial.
      </p>
      <div className="lonline-container_company-logo">
        <img src={lonline} alt="Logo Lampung Online" width="500px" />
      </div>
      <div className="lonline-container_detail">
        <div className="lonline-container_detail-feature">
          <div>
            <h4>Fitur dan Fasilitas</h4>
            <ol>
              <li>Informasi Rekening</li>
              <li>Transfer antar sesama Bank Lampung/Bank Lain</li>
              <li>Beli/Bayar :</li>
              <ul type="disc">
                <li>Isi ulang pulsa</li>
                <li>Isi Ulang Paket Data Internet </li>
                <li>Pasca Bayar</li>
                <li>Pembayaran E-Samsat (Pajak Kendaraan Bermotor)</li>
                <li>Pembayaran PBB (Pajak Bumi dan Bangunan)</li>
                <li>
                  Pembayaran BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan)
                </li>
                <li>
                  Pembayaran Pajak Daerah Lainnya (Pajak Air Tanah, Pajak Hotel,
                  Pajak Restaurant, Pajak Hiburan, Pajak Reklame, Pajak
                  Retribusi, Parkir, Pajak Mineral dan Pajak Penerangan Jalan)
                </li>
                <li>Pembelian Token Listrik PLN</li>
              </ul>
            </ol>
          </div>
        </div>
        <div className="lonline-container_detail-requirement">
          <h4>Syarat Pendaftaran</h4>
          <ol>
            <li>KTP Elektronik</li>
            <li>Buku Tabungan Bank Lampung</li>
            <li>Kartu Keluarga</li>
            <li>Pengisian Form Aplikasi</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LampungOnline;
