"use client";
import React, { useEffect, useRef } from "react";
import "./AnmtionScroll.css";

function AnmtionScroll({ children, AnmtionItem }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(AnmtionItem);
          } else {
            entry.target.classList.remove(AnmtionItem); // Optional: remove when out of view
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px", // Trigger sedikit lebih awal
      }
    );

    const currentRef = itemRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [AnmtionItem]); // Add AnmtionItem to dependency array

  return (
    <div className="AnmtionScroll" ref={itemRef}>
      {children}
    </div>
  );
}

export default AnmtionScroll;
