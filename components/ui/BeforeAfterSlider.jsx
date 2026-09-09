import Image from "next/image";

export default function BeforeAfterSlider({
  before,
  after,
  aspect = "4/3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}) {
  return (
    <div
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

      <div className="hero-ba-clip absolute inset-0">
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          priority
          className="object-cover"
        />
      </div>

      <div className="hero-ba-handle absolute inset-y-0 z-10 -ml-px w-0.5 bg-white/80">
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-dark shadow-md">
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
        </div>
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-primary-dark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Előtte
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Utána
      </span>
    </div>
  );
}
