import { Card, Row, Col, Button } from "react-bootstrap";
import { berita5Path, berita6Path, berita7Path, beritaPath } from "../routes";
import berita5 from "../assets/img/berita/berita5.jpg";
import berita6 from "../assets/img/berita/berita6.jpg";
import berita7 from "../assets/img/berita/berita7.jpg";

function BeritaHome() {
  return (
    <div className="berita-container">
      <div className="berita-container_title" id="berita">
        <h3>Berita Terbaru</h3>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={berita7} alt="Berita 7" />
            <Card.Body>
              <Card.Title>
                <Card.Link href={berita7Path}>
                  Update L-online BI-Fast
                </Card.Link>
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
                <Card.Link href={berita6Path}>
                  Hari Indonesia Menabung
                </Card.Link>
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
                Nikmati Promo Merdeka discount 17% di merchant QRIS Bank
                Lampung. Di setiap toko-toko / merchant QRIS Bank Lampung
                bertanda khusus. Promo hanya berlaku selama bulan Agustus dan
                tidak berlaku kelipatan.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">7 Agustus 2023</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <div className="introButton mt-4 text-center">
        <Button variant="primary">
          {" "}
          <a href={beritaPath}> Lihat Semua </a>{" "}
        </Button>
      </div>
    </div>
  );
}

export default BeritaHome;
