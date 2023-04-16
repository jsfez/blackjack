import * as React from "react";
const SvgDiamondA = (props) => (
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
      d="M215.146 285.907V284H220v1.907c0 3.264-1.231 8.729-3.731 16.432L211.235 318h-5.47l-5.034-15.661c-2.5-7.703-3.731-13.168-3.731-16.432V284h4.854v1.907c0 1.541.289 3.558.833 6.052h11.663c.507-2.531.796-4.548.796-6.052Zm-6.664 26.041 3.622-11.737a99.117 99.117 0 0 0 1.449-5.024h-10.142c.398 1.54.869 3.227 1.449 5.024l3.622 11.737ZM24.854 50.093V52H20v-1.907c0-3.265 1.232-8.73 3.73-16.432L28.766 18h5.47l5.034 15.661C41.77 41.364 43 46.828 43 50.093V52h-4.853v-1.907c0-1.54-.29-3.558-.834-6.052H25.65c-.507 2.53-.796 4.548-.796 6.052Zm6.664-26.041-3.622 11.737a98.14 98.14 0 0 0-1.449 5.024H36.59a88.477 88.477 0 0 0-1.449-5.024l-3.622-11.737Z"
    />
    <path
      fill="#D71E00"
      d="m209 250-10 12.174 10 12.174 10-12.174L209 250ZM31 63 21 75.174l10 12.174 10-12.174L31 63ZM120 119l-40 48.696 40 48.695 40-48.695L120 119Z"
    />
  </svg>
);
export default SvgDiamondA;