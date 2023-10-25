import berita3 from "../assets/img/berita/berita3.jpg";

function Berita3() {
  return (
    <div className="berita-page-container">
      <h3>Promo pembukaan QRIS Rp. 0 Rupiah</h3>

      <h6>Bank Lampung - 1 Agustus 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita3} alt="Berita 3" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>Tabik Pun…</p>

            <p>Jadi Merchant QRIS Bank Lampung makin mudah dan murah lho…</p>
            <p>
              Cukup buka rekening Simpeda dan daftar jadi Merchant ORIS Bank
              Lampung, kamu udah bisa jadi Merchant dengan *Setoran Awal sebesar
              Ro 0.- (Nol rupiah)* lhooo…
            </p>
            <br />
            <p>Yuk daftarin usaha kamu…</p>
            <p>Berlaku mulai tanggal 01 Agustus 2023 s/d 31 Agustus 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita3;
