import berita7 from "../assets/img/berita/berita7.jpg";

function Berita7() {
  return (
    <div className="berita-page-container">
      <h3>Update L-online BI-Fast</h3>

      <h6>Bank Lampung - 1 September 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita7} alt="Berita 7" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>
              Transfer Antar Bank di L-online,sekarang lebih Cepat dan Pas
              dengan BI Fast. Biaya transfer antar Bank hanya Rp. 2.500,-.
            </p>
            <p>
              Segera download/update L-online versi 1.9.00.Tersedia di Playstore
              dan Appstore. Setelah melakukan update, berikut tutorial melakukan
              transfer antar Bank.
            </p>
            <p>
              Terdapat 2 cara untuk memanfaatkan fitur ini. Yaitu dengan
              menggunakan Nomor Rekening dan Proxy BI-Fast.
            </p>

            <br />
            <p>Tutorial transfer antar Bank dengan BI Fast</p>
            <ol>
              <li>Pada Menu Utama</li>
              <ul type="disc">
                <li>Klik menu Transfer</li>
                <li>Pilih Transfer Bank Lain</li>
                <li>Tambahkan Penerima</li>
              </ul>
              <li>Klik Rekening Bank</li>
              <li>Pilih Bank Tujuan</li>
              <li>Masukkan nomor rekening tujuan.</li>
              <li>Informasi Transfer.</li>
              <p>Pastikan rekening tujuan sudah benar.</p>
              <li>Proses Transfer.</li>
              <p>
                Silahkan tunggu proses sampai anda mendapatkan notifikasi
                notifikasi Transaksi Berhasil.
              </p>
              <li>Transaksi Berhasil.</li>
              <p>
                Anda dapat membagikan bukti transfer sebagai bukti pembayaran
                dengan format *.pdf atau *.jpg
              </p>
            </ol>

            <br />
            <p>
              Tutorial menghubungkan/mendaftarkan No. Handphone dan No. Rekening
              Bank Lampung dengan Proxy BI-Fast
            </p>
            <ol>
              <li>
                Klik menu Profil pada bagian kanan bawah di menu utama L-online
              </li>
              <li>Pada tampilan menu Profil, pilih menu Pengaturan BI Fast</li>
              <li>
                Pada Daftar Proxy, pilih nomor HP atau email yang akan
                dihubungkan dengan rekening anda
              </li>
              <li>Pastikan Rekening dan Nomor Handphone sudah benar</li>
              <li>
                Baca Syarat dan Ketentuan lalu ceklis di bagian persetujuan
              </li>
              <li>Pendaftaran Berhasil.</li>
              <p>Klik Selesai untuk kembali ke menu utama L-online.</p>
            </ol>

            <br />
            <p>Tutorial transfer antar Bank dengan fitur Proxy BI-Fast</p>
            <ol>
              <li>Pada Menu Utama</li>
              <ul type="disc">
                <li>Klik menu Transfer</li>
                <li>Pilih Proxy BI-Fast</li>
              </ul>
              <li>Masukkan No. Handphone atau email tujuan</li>
              <li>Masukkan Nominal Transfer dan pilih Tujuan Transfer</li>
              <li>Periksa kembali informasi transfer</li>
              <li>Proses Transfer.</li>
              <p> Silahkan tunggu proses selesai.</p>
              <li>Transfer Berhasil.</li>
              <p>
                Anda dapat membagikan bukti transfer dengan format *.pdf dan
                *.jpg
              </p>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita7;
