export default function WaveDivider({
  bgClassName,
  fillClassName,
  flip = false,
  animate = false,
}) {
  if (!animate) {
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
          <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,50 L1440,120 L0,120 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative h-10 w-full overflow-hidden md:h-16 ${bgClassName}`}
    >
      <div className={`absolute inset-0 ${flip ? "-scale-x-100" : ""}`}>
        <div
          className="wave-flow absolute left-0"
          style={{ width: "200%", top: "-2px", bottom: "-2px" }}
        >
          <svg
            className={`block h-full w-full ${fillClassName}`}
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
          >
            <path d="M0,55 C120,20 240,20 360,55 C480,90 600,90 720,55 C840,20 960,20 1080,55 C1200,90 1320,90 1440,55 C1560,20 1680,20 1800,55 C1920,90 2040,90 2160,55 C2280,20 2400,20 2520,55 C2640,90 2760,90 2880,55 L2880,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
