import berita1 from "../assets/img/berita/berita1.jpeg";

function Berita1() {
  return (
    <div className="berita-page-container">
      <h3>Waspada Penipuan Mengatasnamakan Bank Lampung</h3>

      <h6>Bank Lampung - 12 Juni 2023</h6>

      <div className="berita-container_company-logo">
        <img src={berita1} alt="Berita 1" width="750px" />
      </div>
      <div className="berita-container_detail">
        <div className="berita-container_detail-content">
          <div>
            <p>
              Nasabah Bank Lampung yang terhormat di mana pun anda berada,
              Terima kasih untuk selalu setia menjadi nasabah Bank Lampung...
            </p>
            <br />
            <p>
              Bank Lampung menghimbau kepada seluruh nasabah untuk selalu
              waspada terhadap modus penipuan perubahan tarif transfer
              BI-FAST!!!
            </p>
            <br />
            <p>
              Selain itu juga nasabah diharapkan untuk cermat dan teliti dalam
              menerima segala bentuk informasi.
            </p>
            <br />
            <p>
              Berikut ini adalah tips agar terhindar dari modus-modus penipuan:
            </p>
            <ol>
              <li>
                Abaikan akun instagram, chat, atau telepon yang menawarkan promo
                perubahan tarif transfer bank berkedok BI-FAST dengan
                mengatasnamakan Bank Lampung.
              </li>
              <li>
                Nomor Whatsapp RESMI Bank Lampung HANYA +62 811 7208 876 dengan
                tanda centang Hijau.{" "}
              </li>
              <li>
                Info lebih lanjut hubungi call center Bank Lampung pada nomor
                telepon 1500575.
              </li>
            </ol>

            <br />
            <p>
              BANK LAMPUNG TIDAK PERNAH MENGELUARKAN PROGRAM GRATIS BI-FAST!!!
              Selalu cek kebenarannya langsung dari platform RESMI Bank Lampung.
            </p>
            <br />
            <p>
              Pihak Bank Lampung tidak pernah meminta/ menanyakan Password, PIN,
              MPIN, OTP atau Data Pribadi lainnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita1;
