import giro from "../assets/img/giro.png";

function GiroPerorangan() {
  return (
    <div className="giro-container">
      <h3>Giro Perorangan</h3>
      <p>
        Giro Perorangan adalah jenis rekening bank yang diperuntukkan bagi
        individu yang memungkinkan nasabah untuk melakukan setoran dan penarikan
        uang secara fleksibel.
      </p>
      <div className="giro-container_company-logo">
        <img src={giro} alt="Logo Giro" width="500px" />
      </div>
      <div className="giro-container_detail">
        <div className="giro-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ol>
              <li>Transaksi Online</li>
              <li>Ikut serta dalam kliring nasional</li>
              <li>Jasa Giro kompetitif</li>
              <li>
                Dilengkapi dengan fasilitas ATM, SMS Banking, dan Mobile Banking
              </li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="giro-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>NPWP</li>
            <li>Setoran awal minimum Rp 500.000,-</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GiroPerorangan;
