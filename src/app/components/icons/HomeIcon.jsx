import * as React from "react";

function HomeIcon({ fill = "#6C7281", ...rest }) {
  return (
    // <svg
    //   width={24}
    //   height={24}
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...rest}
    // >
    //   <path
    //     d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1.001 1.001 0 00.707-1.707l-9-9a1 1 0 00-1.414 0l-9 9A1 1 0 003 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
    //     fill={fill}
    //   />
    // </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      {...rest}
      viewBox="0 0 448 512">
      <path d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256 160c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32zm64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0zM192 352c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z"
        fill={fill} /></svg>

  );
}

export default HomeIcon;
