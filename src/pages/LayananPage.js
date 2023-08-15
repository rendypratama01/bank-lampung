import Layanan from "../components/Layanan";

function LayananPage() {
  return (
    <div className="layanan-container">
      <div className="layanan-container-title">
        <h3>Layanan</h3>
        <p>
          Produk layanan Bank Lampung mencakup berbagai solusi finansial yang
          dirancang untuk memenuhi kebutuhan nasabah. Bank Lampung menghadirkan
          solusi perbankan digital seperti Lampung Online dan Lampung Smart,
          yang memungkinkan nasabah mengakses akun mereka secara online dan
          mengelola keuangan dengan mudah melalui platform digital. Adopsi QRIS
          juga memfasilitasi pembayaran elektronik yang cepat dan aman.
        </p>
      </div>
      <div>
        <h5>List Product Layanan</h5>
        <Layanan />
      </div>
    </div>
  );
}

export default LayananPage;
