export default function WaveDivider({
  bgClassName,
  fillClassName,
  flip = false,
  animate = false,
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-10 w-full overflow-hidden md:h-16 ${bgClassName}`}
    >
      <svg
        className={`absolute bottom-0 left-0 h-full w-full ${fillClassName} ${flip ? "-scale-x-100" : ""}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          className={animate ? "wave-animate" : ""}
          d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,50 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
