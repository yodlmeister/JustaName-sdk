import type { SVGProps } from 'react';
export default function Luna(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id="luna_svg__a"
          x1="42.198%"
          x2="63.646%"
          y1="38.362%"
          y2="69.083%"
        >
          <stop offset="0%" stopColor="#F7D45C" />
          <stop offset="100%" stopColor="#DE3633" />
        </linearGradient>
        <linearGradient
          id="luna_svg__b"
          x1="16.806%"
          x2="60.351%"
          y1="27.219%"
          y2="72.022%"
        >
          <stop offset="0%" stopColor="#F7D45C" />
          <stop offset="100%" stopColor="#DE3633" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <ellipse
          cx={31.7}
          cy={35.671}
          fill="#F2E373"
          fillRule="nonzero"
          rx={28.1}
          ry={28.177}
        />
        <path
          fill="url(#luna_svg__a)"
          d="M43.1 32.673 4.7 44.164c1.8 5.595 5.3 10.691 10.8 14.588 13.4 9.392 30.1 5.396 40.6-5.795.2-.2 0-.6-.3-.5-2 .9-4.2 1.2-6.3.8-4.1-.8-7.2-3.897-8-7.994-1-5.196 2.1-10.292 7.2-11.79z"
        />
        <path
          fill="url(#luna_svg__b)"
          d="M38.7 30.475c.8-.3 1.5-.7 2.2-1.099C48 25.28 57 26.778 62.5 32.873c.1.1.1.3 0 .4s-.2.1-.3.1c-4.8-1-10-1.2-13.9.1-4.7 1.598-8.2 4.896-10.6 9.092-3.5 6.095-5 7.894-10.7 10.092-9.9 3.897-19.2.3-22.3-8.493-4.1-13.09 1.8-27.278 14-33.673 3.4-1.798 7.6-3.397 11.1-4.396 3.4-1 9.1-2.398 10.6-5.995.1-.1.3-.1.4-.1s.2.1.2.3c.6 4.296-.4 6.195-2.9 8.593-2.7 2.498-6 3.697-8.9 5.495-4.5 2.998-5.9 8.393-2.9 12.89 1.8 2.698 4.8 4.096 8 4.096 1 0 1.9-.1 2.9-.4.5-.1 1-.299 1.5-.499"
        />
      </g>
    </svg>
  );
}