export default function SVGFilters() {
  return (
    <svg
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <filter id="liquid-filter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02 0.05"
            numOctaves="2"
            result="warp"
            id="turbulence"
          >
            <animate
              attributeName="baseFrequency"
              values="0.02 0.05; 0.01 0.02; 0.02 0.05"
              dur="10s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="35"
            in="SourceGraphic"
            in2="warp"
          />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          />
        </filter>
      </defs>
    </svg>
  );
}
