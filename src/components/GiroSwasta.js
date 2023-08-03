import giro from "../assets/img/giro.png";

function GiroSwasta() {
  return (
    <div className="giro-container">
      <h3>Giro Swasta</h3>
      <p>
        Giro Swasta adalah jenis rekening giro yang ditujukan bagi perseorangan,
        kelompok, instansi swasta, yayasan sosial, dan badan non-pemerintah
        lainnya.
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
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="giro-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>NPWP</li>
            <li>Akte Notaris Pendirian & Perubahan</li>
            <li>Izin Usaha (NIB, SIUP, SITU)</li>
            <li>Setoran awal minimum Rp 1.000.000,-</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GiroSwasta;
