// app/ScrollHandler.js
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Tunggu sedikit untuk memastikan DOM selesai render
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 100); // Delay kecil

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
