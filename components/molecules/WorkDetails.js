import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const WorkDetails = ({ item, setIsOpenCld }) => {
  let { title, type, languages, url, description, image } = item;
  const [isOpen, setIsOpen] = useState(false);

  const closeModalChild = () => {
    setIsOpenCld();
  };

  return (
    <div className="z-50 overflow-y-auto rounded left-1/2 top-1/2  shadow-lg w-10/12 bg-[#323232] mx-auto modal-container md:max-w-3xl text-white">
      <div className="px-8 py-6 modal-content ">
        <div className="flex justify-between pb-2">
          <div></div>
          <div>
            <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-2xl  text-center font-bold">
              {title}
            </h2>
          </div>
          <div className="relative ">
            <svg
              onClick={closeModalChild}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="text-7xl cursor-pointer  transition transform hover:rotate-45 duration-300 ease-in-out absolute -left-5 -top-3 "
              height="0.5em"
              width="0.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </div>
        </div>
        <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">
          <div className="grid grid-flow-col gap-2 pt-4 pb-5 xs:justify-items-center md:justify-normal md:grid-rows-2 sm:grid-rows-3 grid-rows-3 ">
            <div className="flex content-start">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                  className="mr-2"
                >
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path
                    fill="#ef4060"
                    d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"
                  />
                </svg>
              </div>
              <div>Project : {type}</div>
            </div>

            <div className="flex content-start">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  width="1em"
                  viewBox="0 0 640 512"
                  className="mr-1"
                >
                  <path
                    fill="#ef4060"
                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                  />
                </svg>
              </div>
              <div>Languages : {languages}</div>
            </div>

            <div className="flex justify-start md:justify-end">
              <Link legacyBehavior href={url}>
                <a
                  target="_blank"
                  class="bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear text-md hover:from-[#DD2476] hover:to-[#FA5252] text-white rounded-[35px]  px-2 flex justify-center items-center text-sm py-1"
                >
                  <div className="pr-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      width="1em"
                      viewBox="0 0 576 512"
                      className=""
                    >
                      <path
                        fill="#ffffff"
                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                      />
                    </svg>
                  </div>
                  <div>Preview Site</div>
                </a>
              </Link>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="dark:text-white text-2line font-normal text-[15px] text-sm pb-2"
          />

          <div>
            <Image
              src={`/images/demoss/${image}`}
              alt="wadwa"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
