import { Card, Row, Col } from "react-bootstrap";
import { danaPath, layananPath, pinjamanPath } from "../routes";
import logolayanan from "../assets/img/logolayanan.png"
import logodana from "../assets/img/logodana.png"
import logopinjaman from "../assets/img/logopinjaman.png"

function Product() {
  return (
    <div className="product-container">
      <div className="product-container_title" id="product">
        <h3>Product</h3>
        <h5>List Product</h5>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={logolayanan} alt="L Smart" />
            <Card.Body>
              <Card.Title>
                <Card.Link href={layananPath}>Layanan</Card.Link>
              </Card.Title>
              <Card.Text>
                <p>
                Produk layanan Bank Lampung mencakup berbagai solusi finansial
                yang dirancang untuk memenuhi kebutuhan nasabah. Bank Lampung
                menghadirkan solusi perbankan digital seperti Lampung Online dan
                Lampung Smart, yang memungkinkan nasabah mengakses akun mereka
                secara online dan mengelola keuangan dengan mudah melalui
                platform digital. Adopsi QRIS juga memfasilitasi pembayaran
                elektronik yang cepat dan aman.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={logodana} alt="L Online" />
            <Card.Body>
              <Card.Title>
                <Card.Link href={danaPath}>Dana</Card.Link>
              </Card.Title>
              <Card.Text>
                Produk tabungan Bank Lampung adalah solusi finansial yang
                memberikan cara praktis bagi nasabah untuk menyimpan dan
                mengelola uang mereka. Dengan pilihan seperti Tabungan Lampung
                Save, Tabungan Simpeda, Tabungan Ku, dan Tabungan Simpanan
                Pelajar, nasabah dapat memilih sesuai dengan tujuan dan
                kebutuhan mereka. Tabungan ini memberikan akses mudah melalui
                layanan seperti ATM dan mungkin dilengkapi dengan buku tabungan.
                Dengan produk tabungan Bank Lampung, nasabah dapat merencanakan
                masa depan finansial mereka dengan lebih baik dan membangun pola
                menabung yang positif.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={logopinjaman} alt="QRIS" />
            <Card.Body>
              <Card.Title>
                <Card.Link href={pinjamanPath}>Pinjaman</Card.Link>
              </Card.Title>
              <Card.Text className="card-text">
                Produk kredit Bank Lampung adalah solusi finansial yang
                memungkinkan nasabah untuk mendapatkan dana pinjaman sesuai
                dengan kebutuhan mereka. Bank Lampung menawarkan berbagai jenis
                kredit, termasuk Kredit Usaha yang mendukung perkembangan
                bisnis, Kredit Pribadi untuk keperluan individu, dan Kredit
                Perumahan untuk pembelian atau pembangunan rumah.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Product;
