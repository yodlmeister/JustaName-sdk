import type { SVGProps } from 'react';
export default function Ftm(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <defs>
        <style>{'.ftm_svg__cls-1{fill:#fff;fill-rule:evenodd}'}</style>
        <mask
          id="ftm_svg__mask"
          width={93.1}
          height={20}
          x={10}
          y={6}
          maskUnits="userSpaceOnUse"
        >
          <path
            id="ftm_svg__a"
            d="M10 6h93.1v20H10Z"
            className="ftm_svg__cls-1"
          />
        </mask>
      </defs>
      <g id="ftm_svg__Layer_2" data-name="Layer 2">
        <g id="ftm_svg__Layer_1-2" data-name="Layer 1">
          <circle
            cx={16}
            cy={16}
            r={16}
            style={{
              fill: '#13b5ec',
            }}
          />
          <path
            d="m17.2 12.9 3.6-2.1V15Zm3.6 9L16 24.7l-4.8-2.8V17l4.8 2.8 4.8-2.8Zm-9.6-11.1 3.6 2.1-3.6 2.1Zm5.4 3.1 3.6 2.1-3.6 2.1Zm-1.2 4.2L11.8 16l3.6-2.1Zm4.8-8.3L16 12.2l-4.2-2.4L16 7.3ZM10 9.4v13.1l6 3.4 6-3.4V9.4L16 6Z"
            className="ftm_svg__cls-1"
            style={{
              mask: 'url(#ftm_svg__mask)',
            }}
          />
        </g>
      </g>
    </svg>
  );
}
