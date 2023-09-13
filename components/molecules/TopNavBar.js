import React from "react";

const scrollToDiv = (targetId) => {
  const targetDiv = document.getElementById(targetId);

  if (targetDiv) {
    // Scroll to the target div smoothly
    targetDiv.scrollIntoView({ behavior: "smooth" });
  }
};

const TopNavButtons = ({ item }) => {
  let { id, title, svgPathD, url, svgViewbox } = item;

  return (
    <a
      className="w-full h-16 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5 text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
      key={id}
      onClick={() => scrollToDiv(url)}
    >
      <span class="text-xl mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="0.85em"
          viewBox={svgViewbox}
        >
          <path className="fill-current " d={svgPathD} />
        </svg>
      </span>
      {title}
    </a>
  );
};

export default TopNavButtons;

{
  /* <a
  href="./"
  className="w-full h-16 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5 px-1 text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] "
  key={id}
>
  <span class="text-xl mb-1">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox={svgViewbox}>
      <path className="fill-current " d={svgPathD} />
    </svg>
  </span>
  {title}
</a>; */
}
