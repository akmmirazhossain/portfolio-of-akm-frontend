// components/Tooltip.js DISABLED
import React from "react";
import Image from "next/image";

const ButtonSkills = ({ title }) => {
  return (
    <>
      {/* <Image
        src={`/images/icons/${img}`}
        alt={`${alt}`}
        width={40}
        height={40}
        className="block object-contain w-8 h-8 transition duration-300 rounded-md "
      /> */}

      <div className="resume-btn text-[15px] hover:bg-[#262626] transition duration-300">
        {title}
      </div>
    </>
  );
};

export default ButtonSkills;
