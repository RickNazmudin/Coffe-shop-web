"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Contact.css";
import ContactSection from "../ContactSection/ContactSection";
import Btn from "../Btn/Btn"; // pastikan import Btn (yang sudah kita perbaiki)

function Contact() {
  // State untuk simpan input
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [pesan, setPesan] = useState("");

  // Ganti dengan nomor WA kamu (format internasional, tanpa + atau 0)
  const phoneNumber = "6281234567890"; // UBAH INI JADI NOMOR KAMU

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat pesan otomatis
    const message =
      `Halo, saya ingin pesan:%0A%0A` +
      `Nama: ${nama}%0A` +
      `Email: ${email}%0A` +
      `Jenis Pesanan: ${jenis}%0A` +
      `Jumlah: ${jumlah}%0A%0A` +
      `Pesan Tambahan:%0A${pesan}`;

    // Link WhatsApp
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Buka WhatsApp
    window.open(waUrl, "_blank");
  };

  return (
    <div className="Contact">
      <ContactSection />

      <Row>
        <Col sm="12" lg="5">
          <div className="text">
            <h3>pesan dari sini</h3>
          </div>
        </Col>
        <Col sm="12" lg="7">
          <form onSubmit={handleSubmit}>
            <div className="label">
              <label>Nama Anda</label>
              <label>Alamat Email</label>
            </div>

            <input
              type="text"
              placeholder="masukkan nama anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="contoh: nama@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="label">
              <label>Jenis Pesanan</label>
              <label>Jumlah (cangkir/porsi)</label>
            </div>

            <select
              value={jenis}
              onChange={(e) => setJenis(e.target.value)}
              required
            >
              <option value="">Pilih jenis</option>
              <option value="Kopi">Kopi</option>
              <option value="Roti & Kue">Roti & Kue</option>
              <option value="Minuman Lain">Minuman Lain</option>
              <option value="Makanan Ringan">Makanan Ringan</option>
            </select>

            <input
              type="text"
              placeholder="contoh: 2 cangkir"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              required
            />

            <textarea
              placeholder="pesan tambahan (opsional)"
              rows="4"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            />

            {/* Ganti input submit dengan Btn biar cantik */}
            <Btn text=" Pesan via WhatsApp" type="submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
