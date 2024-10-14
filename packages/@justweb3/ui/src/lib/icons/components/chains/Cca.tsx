import type { SVGProps } from 'react';
export default function Cca(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 200 200"
      {...props}
    >
      <path fill="url(#cca_svg__a)" d="M0 0h200v200H0z" />
      <defs>
        <pattern
          id="cca_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#cca_svg__b" transform="scale(.005)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="cca_svg__b"
          width={200}
          height={200}
        />
      </defs>
    </svg>
  );
}