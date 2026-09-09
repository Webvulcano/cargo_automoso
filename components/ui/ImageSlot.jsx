import Image from "next/image";

export default function ImageSlot({
  src,
  alt,
  aspect = "4/3",
  sizes = "100vw",
  priority = false,
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-surface ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary/25 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-8 w-8 opacity-60"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5-4 4-3-3-6 6" />
          </svg>
          <span className="px-4 text-center text-sm font-medium">{alt}</span>
        </div>
      )}
    </div>
  );
}
