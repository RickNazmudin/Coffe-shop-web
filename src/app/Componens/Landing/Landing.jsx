import React from "react";
import { Col, Row } from "react-bootstrap";
import cover from "../../Astits/cover2.png";
import Image from "next/image";
import "./Landing.css";
import Btn from "../Btn/Btn";
function Landing() {
  return (
    <div className="Landing">
      <Row>
        <Col sm="12" lg="6">
          <Image
            src={cover}
            alt="cover"
            width="300"
            height="300"
            className="cover"
          />
        </Col>

        <Col sm="12" lg="6">
          <div className="app-content">
            <h2>Download Our Mobile App</h2>
            <p>
              Enjoy a faster, easier experience with <br />
              instant offers, quick browsing, and secure checkout.
            </p>

            <a className="store-btn google" href="#" target="_blank">
              <span>Get it on Google Play</span>
            </a>

            <a className="store-btn apple" href="#" target="_blank">
              <span>Download on the App Store</span>
            </a>

            <p className="small">Available for Android & iOS</p>
          </div>
          <div className="btnHolder">
            <Btn text="google Play" /> <Btn text="app store" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
