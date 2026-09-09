"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  before,
  after,
  aspect = "4/3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  loop = true,
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const stopDragging = () => setDragging(false);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, (p ?? 50) - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, (p ?? 50) + 5));
    }
  };

  const animated = position === null;
  const clipClass = animated ? (loop ? "hero-ba-clip" : "hero-ba-clip-once") : "";
  const handleAnimClass = animated ? (loop ? "hero-ba-handle" : "hero-ba-handle-once") : "";
  const clipStyle = animated ? undefined : { clipPath: `inset(0 0 0 ${position}%)` };
  const handleStyle = animated ? undefined : { left: `${position}%` };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-surface ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes={sizes}
        priority
        className="object-cover"
      />

      <div className={`${clipClass} absolute inset-0`} style={clipStyle}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          priority
          className="object-cover"
        />
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Előtte / utána csúszka"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position ?? 50)}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        className={`${handleAnimClass} absolute inset-y-0 z-10 -ml-3 flex w-6 touch-none select-none items-center justify-center ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={handleStyle}
      >
        <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/80" />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-dark shadow-md">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M8 7l-4 5 4 5" />
            <path d="M16 7l4 5-4 5" />
          </svg>
        </span>
      </div>
    </div>
  );
}
