import React from "react";
import Card from "../Card/Card";
import { Col, Row } from "react-bootstrap";
import "./ProdectItem.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import Image from "next/image";
import productImg from "../../Astits/prodect.webp";
function ProdectItem({ prodect }) {
  return (
    <div className="ProdectItem">
      <HeadingTitle cover="Menu Kami" title="Menu Pilihan" />

      <Row>
        <Col sm="12" lg="5">
          {prodect.slice(0, 10).map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })}
        </Col>

        <Col sm="12" lg="6">
          <Image
            src={productImg}
            alt="prodecut"
            width="400"
            height="400"
            className="productImg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProdectItem;
