import { Card, Row, Col} from "react-bootstrap";
import { lampungOnlinePath, lampungSmartPath, qrisPath } from "../routes";
import lsmart from "../assets/img/lsmart.png";
import lonline from "../assets/img/lonline.jpeg";
import qlau from "../assets/img/pinjaman/qlau.jpg";

function Layanan() {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={lonline} alt="L Smart" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={lampungOnlinePath}>Lampung Online</Card.Link>
            </Card.Title>
            <Card.Text>
              Sistem Aplikasi perbankan berbasis Mobile Application (android dan
              ios) yang digunakan oleh Nasabah untuk melakukan transaksi
              perbankan baik finansial maupun non finansial
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={lsmart} alt="L Online" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={lampungSmartPath}>Lampung Smart</Card.Link>
            </Card.Title>
            <Card.Text>
              Agen Laku Pandai Bank Lampung . Layanan transaksi keuangan
              mandiri. Mitra perpanjangan tangan Bank Lampung dalam melayanani
              transaksi keuangan tanpa kantor.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={qlau} alt="QRIS" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={qrisPath}>QRIS</Card.Link>
            </Card.Title>
            <Card.Text className="card-text">
              Aplikasi QRIS adalah aplikasi milik PT Bank Pembangunan Daerah
              Lampung (“Bank Lampung”) yang diperuntukkan bagi Merchant untuk
              mengelola transaksi pembayaran dari Pelanggan Merchant (“Pelanggan
              Merchant”) yang dilakukan melalui pemindaian QR Code yang telah
              memiliki standar Nasional QR Code Pembayaran.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Layanan;
