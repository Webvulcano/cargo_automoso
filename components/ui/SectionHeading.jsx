export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold leading-tight text-primary-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
