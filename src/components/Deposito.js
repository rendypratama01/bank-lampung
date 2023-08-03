import deposito from "../assets/img/deposito.png";

function Deposito() {
  return (
    <div className="deposito-container">
      <h3>Deposito</h3>
      <p>
        Simpanan dalam bentuk mata uang rupiah dari pihak ketiga (deposan)
        kepada Bank yang penarikannya hanya dapat dilakukan dalam jangka waktu
        tertentu menurut perjanjian antara deposan dan Bank.
      </p>
      <div className="deposito-container_company-logo">
        <img src={deposito} alt="Logo Deposito" width="500px" />
      </div>
      <div className="deposito-container_detail">
        <div className="deposito-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ol>
              <li>Suku bunga kompetitif</li>
              <li>Bebas biaya pinalty</li>
              <li>Dapat dijadikan jaminan kredit</li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="deposito-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Deposito;
