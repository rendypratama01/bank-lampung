import berita2 from "../assets/img/berita/berita2.jpg";

function Berita2() {
  return (
    <div className="berita-page-container">
      <h3>Undian Simpeda 18 Juli 2023</h3>

      <h6>Bank Lampung - 11 Juli 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita2} alt="Berita 2" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>
              Undian Tabungan Lsave dan Simpeda Lokal Bank Lampung 18 Juli 2023.
              Panen rejeki untuk para nasabah setia Bank Lampung nih, semoga
              kamu yang jadi pemenang hadiahnya
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita2;
