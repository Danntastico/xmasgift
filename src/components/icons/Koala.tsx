import React, { FunctionComponent } from "react";
interface KoalaProps {
  width: string;
  height: string;
}
export const Koala: FunctionComponent<KoalaProps> = ({ width, height }) => {
  return (
    <svg
      height={height}
      viewBox="1 -70 512 511"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 100.96c0 55.485-44.977 100.462-100.46 100.462-55.485 0-100.462-44.977-100.462-100.461S356.055.5 411.54.5 512 45.477 512 100.96zm0 0"
        fill="#77889a"
      />
      <path
        d="M455.988 100.96c0 24.552-19.902 44.45-44.449 44.45-24.55 0-44.45-19.898-44.45-44.45 0-24.546 19.9-44.448 44.45-44.448 24.547 0 44.45 19.902 44.45 44.449zm0 0"
        fill="#ffbfc5"
      />
      <path
        d="M156.625 341.375c-45.723-31.57-75.68-84.352-75.68-144.125 0-96.676 78.368-175.055 175.055-175.055s175.055 78.38 175.055 175.055c0 59.773-29.957 112.555-75.68 144.125zm0 0"
        fill="#a5b0bc"
      />
      <path
        d="M111.852 197.25c0-91.469 70.156-166.547 159.597-174.371-14.02-1.227-28.199-.793-42.11 1.332-17.1 2.613-33.788 7.836-49.37 15.348C161.594 15.805 132.816.5 100.46.5 44.977.5 0 45.48 0 100.96c0 48.817 34.82 89.497 80.98 98.567.758 56.012 29.282 109.836 75.645 141.848h30.906c-45.726-31.57-75.68-84.352-75.68-144.125zm0 0"
        fill="#77889a"
      />
      <path
        d="M355.375 341.375v.012c-28.23 19.5-62.473 30.918-99.375 30.918s-71.145-11.418-99.375-30.918v-.012c-11.324-94.996 60.355-120.441 60.355-120.441h78.043c-.003 0 71.676 25.445 60.352 120.441zm0 0"
        fill="#e8e8e8"
      />
      <path
        d="M267.563 371.922c.046-.004 2.644-.192 3.89-.3-30.992-2.708-59.676-13.49-83.922-30.247a175.934 175.934 0 01-31.867-28.297c-.508 8.664-.258 18.074.961 28.309a169.976 169.976 0 005.363 3.558 174.95 174.95 0 0016.887 9.5c23.27 11.438 49.45 17.86 77.125 17.86 1.254 0 8.965-.215 11.563-.383zm0 0"
        fill="#d2d1d7"
      />
      <path
        d="M295.02 252.477v12.125c0 10.78-4.368 20.527-11.426 27.597-7.059 7.055-16.82 11.426-27.594 11.426-21.555 0-39.023-17.469-39.023-39.023v-12.125zm0 0"
        fill="#333a41"
      />
      <path
        d="M295.02 220.934v31.543c-11.696 6.011-24.961 9.402-39.02 9.402s-27.324-3.39-39.02-9.402v-31.543c0-21.555 17.465-39.032 39.02-39.032s39.02 17.477 39.02 39.032zm0 0"
        fill="#3d4851"
      />
      <path
        d="M342.559 210.3a7.726 7.726 0 01-7.727-7.726v-14.027c0-4.27 3.461-7.727 7.727-7.727s7.726 3.457 7.726 7.727v14.027c0 4.27-3.46 7.727-7.726 7.727zm0 0"
        fill="#333a41"
      />
      <path
        d="M363.355 237.84h-15.453a7.724 7.724 0 01-7.726-7.727 7.726 7.726 0 017.726-7.726h15.453c4.27 0 7.727 3.46 7.727 7.726a7.724 7.724 0 01-7.727 7.727zm0 0M164.098 237.84h-15.453a7.724 7.724 0 01-7.727-7.727 7.726 7.726 0 017.727-7.726h15.453c4.27 0 7.726 3.46 7.726 7.726a7.724 7.724 0 01-7.726 7.727zm0 0"
        fill="#ffbfc5"
      />
      <path
        d="M169.441 210.3a7.726 7.726 0 01-7.726-7.726v-14.027c0-4.27 3.46-7.727 7.726-7.727s7.727 3.457 7.727 7.727v14.027c0 4.27-3.461 7.727-7.727 7.727zm0 0"
        fill="#333a41"
      />
      <path
        d="M133.96 71.766c-8.148-9.344-20.132-15.254-33.5-15.254-24.55 0-44.448 19.898-44.448 44.449 0 20.66 14.097 38.027 33.199 43.012 8.844-27.707 24.394-52.41 44.75-72.207zm0 0"
        fill="#ffbfc5"
      />
    </svg>
  );
};