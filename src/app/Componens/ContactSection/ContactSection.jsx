import React from "react";
import "./ContactSection.css";
import Image from "next/image";
import contactImg1 from "../../Astits/contact1.avif";
import contactImg2 from "../../Astits/contact2.avif";
import { Col, Row } from "react-bootstrap";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import Btn from "../Btn/Btn";
function ContactSection() {
  return (
    <div className="ContactSection">
      <HeadingTitle cover="hubungi kami" title="Temukan Kami di Sini" />
      <Row>
        <Col sm="12" lg="3">
          <div className="section1">
            <Image
              src={contactImg1}
              alt="contact1"
              width="300"
              height="300"
              className="img1"
            />
          </div>
        </Col>
        <Col sm="12" lg="6">
          <div className="section2">
            <h6>Hubungi kami untuk reservasi meja & pesan antar:</h6>
            <h2>022-252-08683</h2>
            <h5>informasi restoran:</h5>
            <p>Alamat: Jl. Braga No. 20-45, Bandung, Jawa Barat</p>
            <p>Email: mh887315@gmail.com</p>
            <p>Jam Buka: Senin - Jumat : 09.00 - 22.00, Hari Libur : Tutup</p>
            <Btn
              text="dapatkan petunjuk arah"
              href="https://maps.google.com/?q=Jl.+Braga+No.+20-45,+Bandung,+Jawa+Barat"
            />
          </div>
        </Col>

        <Col sm="12" lg="3">
          <div className="section3">
            <Image
              src={contactImg2}
              alt="contact1"
              width="300"
              height="300"
              className="img1"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactSection;
