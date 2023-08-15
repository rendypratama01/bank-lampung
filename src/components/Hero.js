import { Col, Container, Row, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero d-flex justify-content-center align-items-center">
      <Container className="text-center ">
        <Row>
          <Col>
            <div className="title">
              Selamat Datang Di Bank Lampung
              <br />
              KCP Menggala
            </div>
            <div className="introButton mt-4 text-center" >
              <Button variant="primary"> <a href="#product"> Lihat List Product </a> </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
