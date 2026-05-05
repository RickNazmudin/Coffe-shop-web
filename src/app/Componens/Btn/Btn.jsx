// src/app/Componens/Btn/Btn.jsx
"use client"; // tambah ini kalau belum ada
import "./Btn.css";
import Link from "next/link";

function Btn({ text, href, type = "button", children, ...props }) {
  const className = "Btn";

  // 1. Internal link (Next.js)
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        <span>{text || children}</span>
      </Link>
    );
  }

  // 2. External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        <span>{text || children}</span>
      </a>
    );
  }

  // 3. Tombol biasa (termasuk type="submit")
  return (
    <button type={type} className={className} {...props}>
      <span>{text || children}</span>
    </button>
  );
}

export default Btn;
