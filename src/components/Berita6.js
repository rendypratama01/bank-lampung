import berita6 from "../assets/img/berita/berita6.jpg";

function Berita6() {
  return (
    <div className="berita-page-container">
      <h3>Hari Indonesia Menabung</h3>

      <h6>Bank Lampung - 21 Agustus 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita6} alt="Berita 6" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>SELAMAT MEMPERINGATI HARI INDONESIA MENABUNG</p>
            <p>
            <br />
              Hari Indonesia Menabung diperingati sebagai pengingat untuk
              mendukung peningkatan inklusi keuangan serta menanamkan budaya
              menabung bagi para Pelajar dan Mahasiswa.
            </p>
            <br />
            <p>
              Manfaat menabung itu sangat baik, salah satunya membuat masyarakat
              menjadi pribadi yang disiplin. Selain itu, juga mendorong untuk
              lebih bersemangat dalam mencapai target tabungan yang diinginkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita6;
