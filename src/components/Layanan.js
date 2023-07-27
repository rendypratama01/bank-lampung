import { Card, Row, Col, NavLink} from "react-bootstrap";
import {
    homePath,
  } from "../routes";
import lsmart from "../assets/img/lsmart.png";
import lonline from "../assets/img/lonline.jpeg";

function Layanan () {
    return (
        <Row xs={1} md={4} className="g-4">
        <Col >
        <Card>
          <Card.Img variant="top" src={lsmart} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Lampung Online</NavLink></Card.Title>
            <Card.Text>
            Agen Laku Pandai Bank Lampung . Layanan transaksi keuangan mandiri. 
            Mitra perpanjangan tangan Bank Lampung dalam melayanani transaksi keuangan tanpa kantor.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={lonline} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Lampung Smart</NavLink></Card.Title>
            <Card.Text>
            Sistem Aplikasi perbankan berbasis Mobile Application (android dan ios)
            yang digunakan oleh Nasabah untuk melakukan transaksi perbankan baik 
            finansial maupun non finansial
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={lonline} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>QRIS</NavLink></Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
      </Row>
    )
}

export default Layanan