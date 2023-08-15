import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import kreditAnekaUsaha from "../assets/img/pinjaman/kredit-aneka-usaha.png";
import kreditKontraktor from "../assets/img/pinjaman/kredit-kontraktor.png";
import kreditKmkLainnya from "../assets/img/pinjaman/kredit-kmk-lainnya.png";
import kmkKiKur from "../assets/img/pinjaman/kmk-ki-kur.png";
import kreditResiGudang from "../assets/img/pinjaman/kredit-resi-gudang.png";
import kreditPantasPegawaiAktif from "../assets/img/pinjaman/kredit-pantas-pegawai-aktif.png";
import kreditPantasPraPensiun from "../assets/img/pinjaman/kredit-pantas-pra-pensiun.png";
import kreditPantasPensiun from "../assets/img/pinjaman/kredit-pantas-pensiun.png";
import kreditSigerDewan from "../assets/img/pinjaman/kredit-siger-dewan.png";
import kreditPerorangan from "../assets/img/pinjaman/kredit-perorangan.png";
import kreditLinkageProgram from "../assets/img/pinjaman/kredit-linkage-program.png";
import kmkKonstruksiDeveloper from "../assets/img/pinjaman/k-m-k-konstruksi-developer.png";
import kreditUsahaRakyat from "../assets/img/pinjaman/kredit-usaha-rakyat(-k-u-r).png";
import rekeningKoran from "../assets/img/pinjaman/rekening-koran.png";
import bankGaransi from "../assets/img/pinjaman/bank-garansi.png";
import { Link } from "react-router-dom";
import {
  bankGaransiPath,
  kmkKiKurPath,
  kmkKonstruksiDeveloperPath,
  kreditAnekaUsahaPath,
  kreditKiKmkPath,
  kreditKontraktorPath,
  kreditLinkageProgramPath,
  kreditPantasPegawaiAktifPath,
  kreditPantasPensiunPath,
  kreditPantasPraPensiunPath,
  kreditPeroranganPath,
  kreditResiGudangPath,
  kreditSigerDewanPath,
  kreditUsahaRakyatPath,
  rekeningKoranPath,
} from "../routes";

function Pinjaman() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditAnekaUsaha}
            alt="Kredit aneka usaha"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditAnekaUsahaPath}>Kredit Aneka Usaha</Link>
            </Card.Title>
            <Card.Text>
              Kredit Aneka Usaha (KAU) adalah kredit yang diberikan kepada
              usaha-usaha produktif segmen Mikro untuk membiayai kebutuhan usaha
              produktif baik untuk kebutuhan investasi maupun kebutuhan modal
              kerja.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditKontraktor}
            alt="Kredit kontraktor"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditKontraktorPath}>Kredit Kontraktor</Link>
            </Card.Title>
            <Card.Text>
              Kredit Kontraktor merupakan salah satu produk unggulan di segmen
              produktif pada PT. Bank Pembangunan Daerah Lampung, Kredit Modal
              Kerja Kontraktor merupakan fasilitas kredit yang diberikan kepada
              kontraktor atau konsultan untuk pembuatan atau penyelesaian atas
              pengadaan barang dan jasa atau suatu kegiatan konstruksi dari
              suatu proyek bangunan fisik dan non-fisik.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditKmkLainnya}
            alt="Kredit KI KMK lainnya"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditKiKmkPath}>Kredit KI/KMK Lainnya</Link>
            </Card.Title>
            <Card.Text>
              Merupakan salah satu fasilitas kredit modal kerja dan investasi
              Bank Lampung dengan plafond pinjaman yang besar.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={kmkKiKur} alt="KMK KI KUR" />
          <Card.Body>
            <Card.Title>
              <Link to={kmkKiKurPath}>KMK/KI-KUR</Link>
            </Card.Title>
            <Card.Text>
              Program pembiayaan modal kerja dan investasi melalui perbankan
              yang mendapatkan subsidi dari Pemerintah untuk membantu para
              pelaku usaha meningkatkan dan mengembangkan kegiatan usahanya.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditResiGudang}
            alt="Kredit resi gudang"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditResiGudangPath}>Kredit Resi Gudang</Link>
            </Card.Title>
            <Card.Text>
              Kredit Resi Gudang adalah kredit yang diberikan kepada pemegang
              resi gudang yang merupakan pemilik barang atau pihak yang menerima
              pengalihan dari pemilik barang atau pihak lain yang menerima
              pengalihan lebih lanjut dari gudang yang telah ditunjuk
              Pemerintah.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditPantasPegawaiAktif}
            alt="Kredit pantas pegawai aktif"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditPantasPegawaiAktifPath}>
                Kredit Pantas Pegawai Aktif
              </Link>
            </Card.Title>
            <Card.Text>
              Kredit Pantas Pegawai Aktif merupakan fasilitas kredit pegawai
              yang diperuntukkan bagi Calon Pegawai Negeri Sipil (CPNS)/ PNS
              Otonomi Daerah/Vertikal atau Pusat, dan Pegawai tetap
              BUMN/BUMD/Lembaga/ Swasta.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditPantasPraPensiun}
            alt="Kredit pantas pra pensiun"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditPantasPraPensiunPath}>
                Kredit Pantas Pra Pensiun
              </Link>
            </Card.Title>
            <Card.Text>
              Kredit Pantas Pra Pensiun merupakan fasilitas kredit pegawai yang
              diperuntukkan bagi Pegawai Negeri Sipil (PNS) Otonomi Daerah
              hingga melewati batas masa aktif pegawai (Pensiun).
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditPantasPensiun}
            alt="Kredit pantas pensiun"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditPantasPensiunPath}>Kredit Pantas Pensiun</Link>
            </Card.Title>
            <Card.Text>
              Kredit Pantas Pensiun merupakan fasilitas kredit pegawai yang
              diperuntukkan bagi Pensiunan Pegawai Negeri Sipil (PNS), Pensiunan
              BUMN/BUMD/Swasta/Lembaga, Janda/Duda Pensiunan, dan Anak
              Pensiunan.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditSigerDewan}
            alt="Kredit siger dewan"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditSigerDewanPath}>Kredit Siger Dewan</Link>
            </Card.Title>
            <Card.Text>
              Kredit Siger Dewan merupakan fasilitas kredit kepada anggota Dewan
              Perwakilan Rakyat Daerah (DPRD) Provinsi, Kabupaten/Kota.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditPerorangan}
            alt="Kredit perorangan"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditPeroranganPath}>Kredit Perorangan</Link>
            </Card.Title>
            <Card.Text>
              Kredit Perorangan (Personal Loan) adalah Kredit yang diberikan
              kepada calon debitur berpenghasilan tetap maupun penghasilan tidak
              tetap guna menunjang pekerjaan
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditLinkageProgram}
            alt="Kredit linkage program"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditLinkageProgramPath}>Kredit Linkage Program</Link>
            </Card.Title>
            <Card.Text>
              Kredit Linkage Program adalah fasilitas kredit kepada Lembaga
              Keuangan dengan cara melakukan aliansi strategis dengan BPR &
              Koperasi untuk mencapai sinergi dalam peningkatan ekspansi kredit
              melalui pola Excetuting dan/ atau Pola Channeling.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kmkKonstruksiDeveloper}
            alt="KMK konstruksi developer"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kmkKonstruksiDeveloperPath}>
                KMK Konstruksi Developer
              </Link>
            </Card.Title>
            <Card.Text>
              Fasilitas Kredit Yang Diberikan Kepada Individu Atau Badan Usaha
              Untuk Pembiayaan Modal Kerja Yang Habis Dalam Satu Siklus Usaha
              Dan Dapat Diperpanjang Sesuai Kebutuhan.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={kreditUsahaRakyat}
            alt="Kredit usaha rakyat"
          />
          <Card.Body>
            <Card.Title>
              <Link to={kreditUsahaRakyatPath}>Kredit Usaha Rakyat</Link>
            </Card.Title>
            <Card.Text>
              Kredit Usaha Rakyat (KUR) adalah Kredit/Pembiayaan Modal Kerja
              dan/atau investasi kepada debitur usaha yang produktif dan layak
              (feasible) namun belum memiliki agunan tambahan atau agunan
              tambahan belum cukup (belum bankable)
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={rekeningKoran} alt="Rekening koran" />
          <Card.Body>
            <Card.Title>
              <Link to={rekeningKoranPath}>Rekening Koran</Link>
            </Card.Title>
            <Card.Text>
              Rekening Koran adalah fasilitas kredit yang diberikan kepada
              pelaku usaha, baik UMKM (mikro, ritel komersional, dan menengah)
              maupun korporat, dalam rangka pembiayaan terhadap modal kerja.
              Dimana penyetoran dan penarikan dananya dapat dilakukan dengan
              menggunakan semua fasilitas transaksi yang disediakan pada
              rekening giro, yaitu cek dan bilyet giro.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={bankGaransi} alt="Bank garansi" />
          <Card.Body>
            <Card.Title>
              <Link to={bankGaransiPath}>Bank Garansi</Link>
            </Card.Title>
            <Card.Text>
              Bank Garansi adalah jaminan yang diberikan oleh Penjamin/ Bank
              kepada penerima jaminan apabila pihak terjamin melakukan
              wanprestasi.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Pinjaman;
