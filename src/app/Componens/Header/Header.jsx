import Image from "next/image";
import Cup from "../../Astits/headerPhoto.webp";
import "./Header.css";
import Btn from "../Btn/Btn";
import AnmtionScroll from "../AnmtionScroll/AnmtionScroll";

function Header() {
  // Konfigurasi WhatsApp
  const phoneNumber = "6281234567890"; // GANTI dengan nomor WhatsApp Anda
  const defaultMessage = "Halo, saya ingin memesan menu dari website Anda!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="Header">
      <div className="start">
        <video autoPlay loop muted className="videoStart">
          <source src="/video/coffeeHeader.mp4" type="video/mp4" />
        </video>
        <h5>Dimulai sejak 1996</h5>
        <p>
          Nikmati aromanya, rasakan cita rasanya, dan rasakan seperti di rumah
          sendiri
        </p>
      </div>
      <AnmtionScroll AnmtionItem="effect">
        <div className="cupPhoto">
          <Image
            src={Cup}
            alt="cup"
            width="500"
            height="500"
            className="myCup"
          />
        </div>
      </AnmtionScroll>

      <div className="textHeader">
        <h4>
          kedai kopi <span>seduhan</span> <br /> terbaik
        </h4>

        {/* Wrap Btn dengan link WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <Btn>Pesan Sekarang</Btn>
        </a>
      </div>
    </div>
  );
}

export default Header;
