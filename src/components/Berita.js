import { Card, Row, Col } from "react-bootstrap";
import { berita1Path, berita2Path, berita3Path, berita4Path, berita5Path, berita6Path, berita7Path } from "../routes";
import berita1 from "../assets/img/berita/berita1.jpeg";
import berita2 from "../assets/img/berita/berita2.jpg";
import berita3 from "../assets/img/berita/berita3.jpg";
import berita4 from "../assets/img/berita/berita4.jpg";
import berita5 from "../assets/img/berita/berita5.jpg";
import berita6 from "../assets/img/berita/berita6.jpg";
import berita7 from "../assets/img/berita/berita7.jpg";

function Berita() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={berita7} alt="Berita 7" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita7Path}>Update L-online BI-Fast</Card.Link>
            </Card.Title>
            <Card.Text>
              <p>
                Transfer Antar Bank di L-online,sekarang lebih Cepat dan Pas
                dengan BI Fast. Biaya transfer antar Bank hanya Rp. 2.500,-.
                Segera download/update L-online versi 1.9.00.Tersedia di
                Playstore dan Appstore. Setelah melakukan update, berikut
                tutorial melakukan transfer antar Bank.
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 September 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita6} alt="Berita 6" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita6Path}>Hari Indonesia Menabung</Card.Link>
            </Card.Title>
            <Card.Text>
              Hari Indonesia Menabung diperingati sebagai pengingat untuk
              mendukung peningkatan inklusi keuangan serta menanamkan budaya
              menabung bagi para Pelajar dan Mahasiswa.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">21 Agustus 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita5} alt="Berita 5" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita5Path}>
                Promo Merdeka 17% QRIS Bank Lampung
              </Card.Link>
            </Card.Title>
            <Card.Text>
              Nikmati Promo Merdeka discount 17% di merchant QRIS Bank Lampung.
              Di setiap toko-toko / merchant QRIS Bank Lampung bertanda khusus.
              Promo hanya berlaku selama bulan Agustus dan tidak berlaku
              kelipatan.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">7 Agustus 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita4} alt="Berita 4" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita4Path}>
                Promo Merdeka Voucher Belanja Chandra
              </Card.Link>
            </Card.Title>
            <Card.Text>
              Nikmati Promo Merdeka berupa voucher belanja di Chandra dari Bank
              Lampung. Cukup buka tabungan Bank Lampung dengan nominal setoran
              RP. 780.000,- (tidak berlaku kelipatan) Promo hanya berlaku selama
              bulan Agustus dan selama persediaan masih ada yaa..
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">7 Agustus 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita3} alt="Berita 3" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita3Path}>
                Promo pembukaan QRIS Rp. 0 Rupiah
              </Card.Link>
            </Card.Title>
            <Card.Text>
              Jadi Merchant QRIS Bank Lampung makin mudah dan murah lho… Cukup
              buka rekening Simpeda dan daftar jadi Merchant ORIS Bank Lampung,
              kamu udah bisa jadi Merchant dengan *Setoran Awal sebesar Ro 0.-
              (Nol rupiah)* lhooo…
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1 Agustus 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita2} alt="Berita 2" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita2Path}>Undian Simpeda 18 Juli 2023</Card.Link>
            </Card.Title>
            <Card.Text>
              Undian Tabungan Lsave dan Simpeda Lokal Bank Lampung 18 Juli 2023.
              Panen rejeki untuk para nasabah setia Bank Lampung nih, semoga
              kamu yang jadi pemenang hadiahnya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">11 Juli 2023</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={berita1} alt="Berita 1" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={berita1Path}>
                Waspada Penipuan Mengatasnamakan Bank Lampung
              </Card.Link>
            </Card.Title>
            <Card.Text>
              Bank Lampung menghimbau kepada seluruh nasabah untuk selalu
              waspada terhadap modus penipuan perubahan tarif transfer
              BI-FAST!!! Selain itu juga nasabah diharapkan untuk cermat dan
              teliti dalam menerima segala bentuk informasi.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">12 Juni 2023</small>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Berita;
