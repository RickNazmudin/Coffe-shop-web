import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Row>
        <Col sm="12" lg="4">
          <div className="here">
            <h3>Kami Ada di Sini</h3>
            <h5>Lokasi:</h5>
            <p>
              Alamat: Jl. Braga No. 20-45
              <br /> Bandung, Jawa Barat
            </p>
            <h5>Reservasi Meja:</h5>
            <p>mh887315@gmail.com</p>
            <p>022-252-08683</p>
          </div>
        </Col>
        <Col sm="12" lg="5">
          <div className="aboutUs">
            <h3>tentang kami</h3>
            <p>
              Bergabunglah dengan kami untuk acara musik live mingguan,
              pembacaan puisi, dan acara pencicipan khusus. Karena kopi lebih
              nikmat dinikmati bersama teman baik.
            </p>
            <div className="socail">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </Col>
        <Col sm="12" lg="3">
          <div className="opaning">
            <h3>Jam Buka</h3>
            <div className="time">
              <span>Senin - Jumat : </span>
              <span>09:00 - 22:00</span>
            </div>
            <div className="time">
              <span>Sabtu : </span>
              <span>10:00 - 23:00</span>
            </div>
            <div className="time">
              <span>Minggu : </span>
              <span>17:00 - 23:00</span>
            </div>
            <div className="time">
              <span>Hari Libur :</span>
              <span>Tutup</span>
            </div>
            <div className="time">
              <span>Jam Promo : </span>
              <span>18:00 - 20:00</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="copyRight">
          <p>Hak Cipta dan desain oleh @Ricknzm- 2025. oleh Webflow</p>
          <ul>
            <li>tentang</li>
            <li>penawaran</li>
            <li>menu</li>
          </ul>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
