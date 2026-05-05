import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import offer1 from "../../Astits/photo1offer.avif";
import offer2 from "../../Astits/photo2offer.avif";
import icon1 from "../../Astits/icon1offer.svg";
import "./Offer.css";
import Btn from "../Btn/Btn";
function Offers() {
  // Konfigurasi WhatsApp
  const phoneNumber = "6281234567890"; // GANTI dengan nomor WhatsApp Anda
  const defaultMessage = "Halo, saya ingin memesan menu dari website Anda!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="Offers">
      <Row>
        <Col sm="12" lg="6">
          <div className="imgOffer">
            <Image
              src={offer1}
              alt="offer1"
              width="500"
              height="500"
              className="imgs"
            />
          </div>
        </Col>
        <Col sm="12" lg="6">
          <div className="textOffer">
            <Image
              src={icon1}
              alt="icon1"
              width="40"
              height="40"
              className="icon1"
            />
            <h3>Pesan secara online</h3>
            <p>
              Padukan kopi Anda dengan pilihan harian pastry, roti, & camilan
              kami, yang dipanggang langsung di tempat untuk kesegaran maksimal.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <Btn>Pesan Sekarang</Btn>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <div className="textOffer">
            <Image
              src={icon1}
              alt="icon1"
              width="40"
              height="40"
              className="icon1"
            />
            <h3>diskon 50%</h3>
            <p>
              Karena kopi terasa lebih nikmat dengan sedikit diskon. Dapatkan
              minuman favorit Anda dan camilan yang dipanggang segar setiap
              hari.
            </p>
            <Btn text="kode: kaffee" />
          </div>
        </Col>
        <Col sm="12" lg="6">
          <div className="imgOffer">
            <Image
              src={offer2}
              alt="offer2"
              width="500"
              height="500"
              className="imgs"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Offers;
