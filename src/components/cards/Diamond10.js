import * as React from "react";
const SvgDiamond10 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={240}
    height={336}
    fill="none"
    {...props}
  >
    <rect width={240} height={336} fill="#fff" rx={11} />
    <rect width={240} height={336} fill="#fff" rx={11} />
    <path
      fill="#222"
      fillRule="evenodd"
      d="M214 309a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-17.5a9 9 0 0 1 9-9 9 9 0 0 1 9 9V309Zm-5 1.5a4 4 0 0 1-8 0V290a4 4 0 0 1 8 0v20.5Z"
      clipRule="evenodd"
    />
    <path fill="#222" d="M217.226 317H222v-34h-4.774v34Z" />
    <path
      fill="#222"
      fillRule="evenodd"
      d="M26 27a9 9 0 1 1 18 0v17.5a9 9 0 1 1-18 0V27Zm5-1.5a4 4 0 0 1 8 0V46a4 4 0 0 1-8 0V25.5Z"
      clipRule="evenodd"
    />
    <path fill="#222" d="M22.774 19H18v34h4.774V19Z" />
    <path
      fill="#D71E00"
      d="m209 250-10 12.174 10 12.174 10-12.174L209 250ZM31 63 21 75.174l10 12.174 10-12.174L31 63ZM120 119l-40 48.696 40 48.695 40-48.695L120 119Z"
    />
  </svg>
);
export default SvgDiamond10;
