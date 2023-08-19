import Dana from "../components/Dana";
import logodana from "../assets/img/logodana.png";

function ContactPage() {
  return (
    <div className="dana-container">
      <div className="dana-container-title">
        <h3>Dana</h3>
        <div className="dana-container_item">
          <div className="dana-container_item-image">
            <img src={logodana} alt="logo dana"></img>
          </div>
          <div className="dana-container_item-text">
            <p>
              Produk tabungan Bank Lampung adalah solusi finansial yang
              memberikan cara praktis bagi nasabah untuk menyimpan dan mengelola
              uang mereka. Dengan pilihan seperti Tabungan Lampung Save,
              Tabungan Simpeda, Tabungan Ku, dan Tabungan Simpanan Pelajar,
              nasabah dapat memilih sesuai dengan tujuan dan kebutuhan mereka.
              Tabungan ini memberikan akses mudah melalui layanan seperti ATM
              dan mungkin dilengkapi dengan buku tabungan. Dengan produk
              tabungan Bank Lampung, nasabah dapat merencanakan masa depan
              finansial mereka dengan lebih baik dan membangun pola menabung
              yang positif.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5>List Product Dana</h5>
        <Dana />
      </div>
    </div>
  );
}

export default ContactPage;
