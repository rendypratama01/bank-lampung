import { Card, Row, Col, NavLink} from "react-bootstrap";
import {
    homePath,
  } from "../routes";
import lsave from "../assets/img/lsave.png";
import simpeda from "../assets/img/simpeda.png";
import tabunganku from "../assets/img/tabunganku.png";
import simpel from "../assets/img/simpel.png";
import giro from "../assets/img/giro.png";
import deposito from "../assets/img/deposito.png";

function Dana () {
    return (
        <Row xs={1} md={4} className="g-4">
        <Col >
        <Card>
          <Card.Img variant="top" src={lsave} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Tabungan L-Save</NavLink></Card.Title>
            <Card.Text>
            L Saving (Lampung Save) merupakan tabungan bisnis yang diperuntukan untuk nasbah perorangan.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={simpeda} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Tabungan Simpeda</NavLink></Card.Title>
            <Card.Text>
            Simpeda adalah tabungan Bank Pembangunan Daerah Seluruh Indonesia dalam mata 
            uang Rupiah yang diperuntukan bagi nasabah perorangan / non perorangan untuk 
            kebutuhan transaksi sehari-hari.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={tabunganku} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Tabungan Ku</NavLink></Card.Title>
            <Card.Text>
            TabunganKu Bank Lampung merupakan produk tabungan yang dikhususkan 
            untuk perorangan dengan persyaratan mudah dan ringan.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={simpel} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Tabungan Simpanan Pelajar</NavLink></Card.Title>
            <Card.Text>
            Tabungan untuk siswa/pelajar yang ditertibkan oleh Bank Lampung dengan 
            persyaratan mudah dan sederhana serta fitur yang menarik, dalam rangka 
            edukasi dan inklusi keuangan untuk mendorong budaya menabung sejak dini.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src={giro} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Giro Perorangan</NavLink></Card.Title>
            <Card.Text>
            Giro Bank Lampung merupakan sarana transaksi keuangan yang bisa anda andalkan 
            untuk usaha maupun untuk keperluan keluarga anda karena mempunyai begitu banyak
            fasilitas yang menguntungkan yang dapat anda manfaatkan.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>

      <Col >
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Giro Swasta</NavLink></Card.Title>
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

      <Col >
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Giro Dinas</NavLink></Card.Title>
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

      <Col >
        <Card>
          <Card.Img variant="top" src={deposito} />
          <Card.Body>
            <Card.Title><NavLink to={homePath}>Deposito</NavLink></Card.Title>
            <Card.Text>
              Simpanan dalam bentuk mata uang rupiah dari pihak ketiga (deposan) 
              kepada Bank yang penarikannya hanya dapat dilakukan dalam jangka 
              waktu tertentu menurut perjanjian antara deposan dan Bank.
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

export default Dana