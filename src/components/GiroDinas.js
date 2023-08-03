import giro from "../assets/img/giro.png";

function GiroDinas() {
  return (
    <div className="giro-container">
      <h3>Giro Dinas</h3>
      <p>
        Giro Dinas adalah jenis rekening giro yang ditujukan bagi instansi
        pemerintah atau dinas. Giro dinas dapat digunakan untuk mempermudah
        transaksi keuangan dan bisnis instansi pemerintah.
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
              <li>Dilengkapi Fasilitas Pemda Online</li>
              <li>Jasa Giro kompetitif</li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="giro-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>NPWP</li>
            <li>SK Penunjukan</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GiroDinas;
