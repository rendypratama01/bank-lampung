import berita5 from "../assets/img/berita/berita5.jpg";

function Berita5() {
  return (
    <div className="berita-page-container">
      <h3>Promo Merdeka 17% QRIS Bank Lampung</h3>

      <h6>Bank Lampung - 7 Agustus 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita5} alt="Berita 5" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>Merdeka!!!</p>
            <br />
            <p>
              Nikmati Promo Merdeka discount 17% di merchant QRIS Bank Lampung.
              Di setiap toko-toko / merchant QRIS Bank Lampung bertanda khusus.
              Promo hanya berlaku selama bulan Agustus dan tidak berlaku
              kelipatan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita5;
