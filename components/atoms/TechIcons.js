// components/Tooltip.js DISABLED
import React from "react";
import Image from "next/image";

const TechIcons = ({ img, alt }) => {
  return (
    <>
      <Image
        src={`/images/icons/${img}`}
        alt={`${alt}`}
        width={40}
        height={40}
        className="block object-contain w-8 h-8 transition duration-300 rounded-md "
      />
    </>
  );
};

export default TechIcons;
