import React from "react";

function About() {
    return (
      <div className="about-container">
        <h3>Tentang Kami</h3>
        <div className="about-container_company">
          <div className="about-container_company-logo">
          
          </div>
          <div className="about-container_company-text">
            <h4>Deskripsi</h4>
            <p>
              Balai Budidaya Perikanan Laut Lampung (BBPBL) merupakan sebuah
              institusi di Lampung yang fokus pada pengembangan perikanan tangkap
              dan perikanan budidaya. BBPBL memiliki fasilitas dan area yang
              penting untuk kegiatan perikanan, dan untuk memaksimalkan
              pemanfaatan sumber daya tersebut, diperlukan sistem informasi yang
              efisien dan akurat. Penggunaan Sistem Informasi Geografis (SIG)
              menjadi sangat relevan dalam konteks ini, karena dapat membantu
              dalam pemetaan, pengorganisasian, dan penyajian informasi mengenai
              lokasi dan fasilitas BBPBL.
            </p>
          </div>
        </div>
        <div className="about-container_duty">
          <div className="about-container_duty-vismis">
            <h4>Visi dan Misi</h4>
            <div className="about-container_duty-vission">
              <h5>Visi</h5>
              <p>
                Mewujudkan Balai Besar Perikanan Budidaya Laut Lampung Sebagai
                Penghasil Induk dan Benih Unggul, serta Teknologi Budidaya Laut
                Adaptif Terbesar di Indonesia
              </p>
            </div>
            <div className="about-container_duty-mission">
              <h5>Misi</h5>
              <ul>
                <li>Memproduksi Induk dan Benih Unggul Ikan Laut</li>
                <li>Melaksanakan Penerapan Teknologi Budidaya Laut</li>
                <li>Memproduksi Bibit Rumput Laut Kultur Jaringan</li>
                <li>Melaksanakan Pelayanan Laboratorium Uji</li>
                <li>
                  Melaksanakan Diseminasi Induk dan Benih Ikan Laut Unggul serta
                  Teknologi Budidaya Laut
                </li>
              </ul>
            </div>
          </div>
          <div className="about-container_duty-task">
            <h4>Tugas</h4>
            <p>
              BBPBL mempunyai tugas melaksanakan uji terap teknik dan kerjasama,
              pengelolaan produksi, pengujian laboratorium, mutu pakan, residu,
              kesehatan ikan dan lingkungan, serta bimbingan teknis perikanan
              budidaya laut.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;