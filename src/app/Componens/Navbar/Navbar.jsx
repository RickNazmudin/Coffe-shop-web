"use client";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../Astits/logo.png";
import Link from "next/link";
import { useState } from "react";
import Btn from "../Btn/Btn";

function NavBar() {
  const [show, setshow] = useState(false);

  const handlerShow = () => {
    setshow(!show);
  };

  return (
    <div className="NavBar navbar-fixed">
      {/* Logo */}
      <Image src={logo} alt="logo" width="100" height="100" />

      {/* Menu Desktop - HREF TETAP SAMA */}
      <ul className="desktop-menu">
        <li>
          <Link href="/">Beranda</Link>
        </li>
        <li>
          <Link href="/aboutus">Tentang Kami</Link>
        </li>
        <li>
          <Link href="/prodects">Produk</Link>
        </li>
        <li>
          <Link href="/offers">Penawaran</Link>
        </li>
        <li>
          <Link href="/contact">Kontak</Link>
        </li>
      </ul>

      {/* Menu Mobile (Hamburger) */}
      <div className="holderMenu" onClick={handlerShow} aria-label="Buka menu">
        <i className="fa-solid fa-bars menu"></i>
      </div>

      {/* Menu Mobile Dropdown - HREF TETAP SAMA */}
      {show && (
        <div className="mobile-menu-overlay" onClick={() => setshow(false)}>
          <ul className="smallMenu" onClick={(e) => e.stopPropagation()}>
            <li className="menu-header">
              <button
                className="close-menu"
                onClick={() => setshow(false)}
                aria-label="Tutup menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <h3>Menu Navigasi</h3>
            </li>
            <li onClick={() => setshow(false)}>
              <Link href="/">
                <i className="fa-solid fa-house"></i> Beranda
              </Link>
            </li>
            <li onClick={() => setshow(false)}>
              <Link href="/aboutus">
                <i className="fa-solid fa-circle-info"></i> Tentang Kami
              </Link>
            </li>
            <li onClick={() => setshow(false)}>
              <Link href="/prodects">
                <i className="fa-solid fa-mug-hot"></i> Produk
              </Link>
            </li>
            <li onClick={() => setshow(false)}>
              <Link href="/offers">
                <i className="fa-solid fa-tags"></i> Penawaran
              </Link>
            </li>
            <li onClick={() => setshow(false)}>
              <Link href="/contact">
                <i className="fa-solid fa-phone"></i> Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
