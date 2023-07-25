import { Col, Container, Row, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero">
      <Container className="text-black text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">
              Selamat Datang Di Bank Lampung
              <br />
              KCP Menggala
            </div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua Product</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
