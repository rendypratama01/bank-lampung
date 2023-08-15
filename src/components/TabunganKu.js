import tabunganku from "../assets/img/tabunganku.png";

function TabunganKu() {
  return (
    <div className="tabunganku-container">
      <h3>TabunganKu</h3>
      <p>
        TabunganKu Bank Lampung merupakan produk tabungan yang dikhususkan untuk
        perorangan dengan persyaratan mudah dan ringan.
      </p>
      <div className="tabunganku-container_company-logo">
        <img src={tabunganku} alt="Logo TabunganKu" width="400px" />
      </div>
      <div className="tabunganku-container_detail">
        <div className="tabunganku-container_detail-feature">
          <div>
            <h4>Manfaat</h4>
            <ol>
              <li>Bunga simpanan kompetitif</li>
              <li>Bebas biaya administrasi bulanan</li>
              <li>Bebas biaya penggantian buku</li>
              <li>Dijamin oleh lembaga Penjamin Simpanan (LPS)</li>
              <li>Saldo minimum sangat kecil</li>
              <li>
                Transaksi tabungan dapat dilakukan secara online di seluruh
                kantor Bank Lampung
              </li>
            </ol>
          </div>
        </div>
        <div className="tabunganku-container_detail-requirement">
          <h4>Persyaratan</h4>
          <ol>
            <li>E-KTP</li>
            <li>
              TabunganKu hanya diperuntukan bagi penabung perorangan dan Warga
              Negara Indonesia
            </li>
            <li>
              Setiap penabung hanya diperbolehkan memiliki 1 ( satu ) rekening,
              kecuali bagi orang tua yang membuka rekening untuk anak yang masih
              dibawah perwalian sesuai Kartu Keluarga yang bersangkutan,
              menggunakan nma orang tua (menggunakan Rekening QQ)
            </li>
            <li>Tidak berlaku rekening gabungan (joint account) Dan/ Atau</li>
            <li>Setoran awal pembukaan rekening minimum Rp.20.000,-</li>
            <li>Setoran tunai selanjutnya minimum Rp.10.000,-</li>
            <li>
              Penarikan di counter minimum Rp.100.000,- kecuali pada saat
              nasabah ingin menutup rekening
            </li>
            <li>Saldo minimum rekening setelah penarikan adalah Rp.20.000,-</li>
            <li>Suku bunga tabunganKu sbb :</li>
            <ul type="disc">
              <li>
                Rp. 0,00 sampai dengan Rp.500.000,00 tidak dikenakan bunga
              </li>
              <li>
                Diatas Rp.500.000,00 sampai dengan Rp.1.000.000,00 sebesar 0,25%
                / tahun
              </li>
              <li>Diatas Rp.1.000.000,00 sebesar 1% / tahun</li>
            </ul>
            <li>
              tabunganKu diberikan fasilitas online banking system, penyetoran
              dan penarikan dapat dilakukan diseluruh kantor operasional Bank
              Lampung
            </li>
            <li>
              Transaksi counter hanya dapat dilakukan di Kantor Operasional Bank
              Lampung
            </li>
            <li>TabungKu tidak dikenakan biaya administrasi bulanan</li>
            <li>TabunganKu tidak dikenakan biaya penggantian buku</li>
            <li>
              Biaya penutupan rekening atas permintaan nasabah adalah
              Rp.20.000,00
            </li>
            <li>
              Biaya penalty atas saldo dorman ( tidak ada transaksi selama 6
              bulan berturut-turut ), sbb :
            </li>
            <ul type="disc">
              <li>Biaya penalty adalah Rp.2.000,00 / bulan</li>
              <li>
                Apabila saldo tabungan kurang dari atau sama dengan Rp.20.000,00
                maka rekening akan ditutup oleh system dengan biaya penutupan
                rekening sebesar sisa saldo
              </li>
            </ul>
            <li>
              TabunganKu belum diikutsertakan dalam program undian berkala
            </li>
            <li>TabunganKu belum diikutsertakan dalam program Sipadana</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TabunganKu;
