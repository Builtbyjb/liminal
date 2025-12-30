export default function BackgroundSVG() {
  return (
    <>
      <svg className="absolute inset-0 size-full stroke-[#C6C6C6]">
        <defs>
          <pattern id="grid-pattern" height="150" width="150" x="0" y="0" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="150" height="150" fill="url(#grid-pattern)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </>
  );
}
