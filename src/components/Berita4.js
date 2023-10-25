import berita4 from "../assets/img/berita/berita4.jpg";

function Berita4() {
  return (
    <div className="berita-page-container">
      <h3>Promo Merdeka Voucher Belanja Chandra</h3>

      <h6>Bank Lampung - 7 Agustus 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita4} alt="Berita 4" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>Merdeka!!!</p>
            <br />
            <p>
              Nikmati Promo Merdeka berupa voucher belanja di Chandra dari Bank
              Lampung. Cukup buka tabungan Bank Lampung dengan nominal setoran
              RP. 780.000,- (tidak berlaku kelipatan)
            </p>
            <p>
              Promo hanya berlaku selama bulan Agustus dan selama persediaan
              masih ada yaa..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita4;
