import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import info1 from "../../Astits/info1.webp";
import info2 from "../../Astits/info2.webp";
import "./About.css";
import Btn from "../Btn/Btn";

function About() {
  return (
    <div className="About">
      <Container>
        <Row>
          <Col sm="12" lg="6">
            <div className="infoOne">
              <h2>kami membuat kopi organik, lezat dan nikmat</h2>
              <Image
                src={info1}
                alt="info1"
                width="500"
                height="500"
                className="infoPhoto"
              />
            </div>
          </Col>

          <Col sm="12" lg="6">
            <div className="info2">
              <Image
                src={info2}
                alt="info2"
                width="700"
                height="700"
                className="infoPhoto"
              />

              <p>
                Rasakan setiap tegukan kopi yang dibuat dengan sempurna. Dari
                aroma yang kaya hingga cita rasa yang kuat dan tekstur yang
                halus, ubah gaya hidup Anda dengan kehangatan seduhan segar
                kami. Biarkan kopi Anda yang membangunkan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
