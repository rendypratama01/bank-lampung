import simpeda from "../assets/img/simpeda.png";

function Simpeda() {
  return (
    <div className="simpeda-container">
      <h3>Simpeda</h3>
      <p>
        Simpeda adalah tabungan Bank Pembangunan Daerah Seluruh Indonesia dalam
        mata uang Rupiah yang diperuntukan bagi nasabah perorangan / non
        perorangan untuk kebutuhan transaksi sehari-hari.
      </p>
      <div className="simpeda-container_company-logo">
        <img src={simpeda} alt="Logo Simpeda" width="500px" />
      </div>
      <div className="simpeda-container_detail">
        <div className="simpeda-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ol>
              <li>Bunga simpanan kompetitif</li>
              <li>Biaya administrasi ringan untuk benefit yang anda peroleh</li>
              <li>Dana dapat dijadikan jaminan kredit</li>
              <li>Dilengkapi dengan fasilitas ATM, SMS Banking, dan Mobile Banking</li>
              <li>Fasilitas ATM yang dapat digunakan untuk pembayaran tagihan listrik, telepon, pembelian pulsa dll</li>
              <li>Total hadiah 6 Milyar diundi 2x dalam setahun diikuti oleh seluruh Bank Pembangunan Daerah</li>
              <li>Bebas biaya transaksi di ATM Bank Lampung</li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
            </ol>
          </div>
        </div>
        <div className="simpeda-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>Setoran awal minimum Rp 100.000,-</li>
            <li>Nasabah Perorangan/Badan</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Simpeda;
