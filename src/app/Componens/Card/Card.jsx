import React from "react";
import "./Card.css";

function Card({ item }) {
  // Fungsi untuk format harga ke Rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="Card">
      <h3>{item.name}</h3>
      <h5>{formatRupiah(item.price)}</h5>
      <p>{item.desc}</p>
    </div>
  );
}

export default Card;
