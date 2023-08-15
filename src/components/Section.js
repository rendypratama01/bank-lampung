import bankanimasi from "../assets/img/bankanimasi.jpg";
import tujuan from "../assets/img/tujuan.png";

function Section() {
  return (
    <div className="home-container">
      <div className="home-container_item">
        <div className="home-container_item-image">
          <img src={bankanimasi} alt="fish in sea"></img>
        </div>
        <div className="home-container_item-text">
          <h4>Bank Lampung</h4>
          <p>
            Bank Lampung KCP Menggala adalah cabang perbankan yang terletak di
            Menggala, yang merupakan bagian integral dari jaringan Bank Lampung.
            Cabang ini menawarkan beragam layanan perbankan kepada masyarakat
            setempat, termasuk penerimaan deposito seperti tabungan dan deposito
            berjangka, serta penyediaan berbagai jenis pinjaman untuk keperluan
            usaha, pribadi, dan perumahan. Selain itu, Bank Lampung KCP Menggala
            juga menyediakan fasilitas layanan ATM, transfer uang, dan penukaran
            mata uang asing, menjadikannya mitra keuangan yang berperan penting
            dalam memenuhi kebutuhan finansial komunitas Menggala.
          </p>
        </div>
      </div>
      <div className="home-container_item">
        <div className="home-container_item-image">
          <img src={tujuan} alt="people show paper map"></img>
        </div>
        <div className="home-container_item-text">
          <p>
            Tujuan utama Bank Lampung KCP Menggala adalah memberikan layanan
            perbankan yang berkualitas kepada masyarakat Menggala, termasuk
            penerimaan deposito, pemberian pinjaman, dan fasilitas transaksi
            yang memudahkan keuangan sehari-hari nasabah. Bank ini juga berupaya
            mendukung pertumbuhan usaha lokal serta meningkatkan pemahaman
            finansial dan kesejahteraan nasabah di wilayah tersebut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
