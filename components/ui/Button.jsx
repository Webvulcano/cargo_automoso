const VARIANTS = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  outline:
    "border border-primary text-primary-dark hover:bg-surface bg-transparent",
};

export default function Button({
  variant = "accent",
  href,
  type = "button",
  children,
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
