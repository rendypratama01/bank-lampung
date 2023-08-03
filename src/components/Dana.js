import { Card, Row, Col } from "react-bootstrap";
import { homePath, lampungSavingPath } from "../routes";
import lsave from "../assets/img/lsave.png";
import simpeda from "../assets/img/simpeda.png";
import tabunganku from "../assets/img/tabunganku.png";
import simpel from "../assets/img/simpel.png";
import giro from "../assets/img/giro.png";
import deposito from "../assets/img/deposito.png";

function Dana() {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={lsave} alt="Tabungan L Save" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={lampungSavingPath}>Tabungan L-Save</Card.Link>
            </Card.Title>
            <Card.Text>
              L Saving (Lampung Save) merupakan tabungan bisnis yang
              diperuntukan untuk nasbah perorangan.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={simpeda} alt="Tabungan simpeda" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Tabungan Simpeda</Card.Link>
            </Card.Title>
            <Card.Text>
              Simpeda adalah tabungan Bank Pembangunan Daerah Seluruh Indonesia
              dalam mata uang Rupiah yang diperuntukan bagi nasabah perorangan /
              non perorangan untuk kebutuhan transaksi sehari-hari.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={tabunganku} alt="Tabunganku" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Tabungan Ku</Card.Link>
            </Card.Title>
            <Card.Text>
              TabunganKu Bank Lampung merupakan produk tabungan yang dikhususkan
              untuk perorangan dengan persyaratan mudah dan ringan.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={simpel}
            alt="Tabungan simpanan pelajar"
          />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Tabungan Simpanan Pelajar</Card.Link>
            </Card.Title>
            <Card.Text>
              Tabungan untuk siswa/pelajar yang ditertibkan oleh Bank Lampung
              dengan persyaratan mudah dan sederhana serta fitur yang menarik,
              dalam rangka edukasi dan inklusi keuangan untuk mendorong budaya
              menabung sejak dini.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={giro} alt="Giro Perorangan" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Giro Perorangan</Card.Link>
            </Card.Title>
            <Card.Text>
              Giro Perorangan adalah jenis rekening bank yang diperuntukkan bagi
              individu yang memungkinkan nasabah untuk melakukan setoran dan
              penarikan uang secara fleksibel.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={giro} alt="Giro Swasta" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Giro Swasta</Card.Link>
            </Card.Title>
            <Card.Text>
              Giro Swasta adalah jenis rekening giro yang ditujukan bagi
              perseorangan, kelompok, instansi swasta, yayasan sosial, dan badan
              non-pemerintah lainnya.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={giro} alt="Giro Dinas" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Giro Dinas</Card.Link>
            </Card.Title>
            <Card.Text>
              Giro Dinas adalah jenis rekening giro yang ditujukan bagi instansi
              pemerintah atau dinas. Giro dinas dapat digunakan untuk
              mempermudah transaksi keuangan dan bisnis instansi pemerintah.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={deposito} alt="Deposito" />
          <Card.Body>
            <Card.Title>
              <Card.Link href={homePath}>Deposito</Card.Link>
            </Card.Title>
            <Card.Text>
              Simpanan dalam bentuk mata uang rupiah dari pihak ketiga (deposan)
              kepada Bank yang penarikannya hanya dapat dilakukan dalam jangka
              waktu tertentu menurut perjanjian antara deposan dan Bank.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Dana;
