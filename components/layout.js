import Head from "next/head";
import Image from "next/image";
import { TopNavButtonsList } from "../constants/constants";
import TopNavBar from "./molecules/TopNavBar";
import React from "react";
import { useState } from "react";
import { MyWorks } from "../constants/constants";
import WorkDetails from "./molecules/WorkDetails";
import ButtonSkills from "./atoms/ButtonSkills";
import ScreenWidthPrinter from "./ScreenWidthPrinter";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  //MY WORK MODAL VARS
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setIsOpen(!isOpen);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const setIsOpenCld = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  // const renderItemComponent = (itemId) => {
  //   return <ItemComponent itemId={itemId} />;
  // };

  return (
    <div
      className="w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-homeTwoBg-dark md:pb-16"
      style={{ backgroundImage: "url('./bghome.jpg')" }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <div className="container mx-auto w-full bg-[#F3F6F6] bg-black lg:bg-transparent lg:bg-transparent flex justify-between py-5 lg:px-0 ">
        {home ? (
          <>
            <div className="w-full p-1 bg-red-500">
              <div className="flex justify-between w-full p-1 bg-blue-400">
                <div className="text-5xl bg-green-500">HEAD (home)</div>
                <div className="text-5xl bg-yellow-500 ">MOBILE NAV RIGHT</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container w-full bg-[#F3F6F6] bg-black lg:bg-transparent lg:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]"></div>
          </>
        )}
      </div> */}
      <main className="container grid grid-cols-12 md:gap-10 justify-between lg:pt-[140px] mx-auto">
        <div className="col-span-12 lg:sticky lg:h-screen lg:col-span-4 lg:block top-44">
          <div className="">
            <div className="text-white w-full  mb-6 lg:mb-0 mx-auto pb-8 relative text-center bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
              <Image
                src="/images/_images_about_avatar.jpg"
                alt="My Image"
                width={500}
                height={300}
                className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
              />
              <div className="pt-[100px] pb-8 ">
                <p className="mt-6 mb-1 text-2xl font-semibold text-white">
                  AKM Miraz Hossain
                </p>
                <p className="mb-4 inline-block bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#A6A6A6] ">
                  Frontend developer
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="https://linkedin.com/in/akmmirazh
"
                    target="_blank"
                    class="bg-[#1D1D1D] hover:bg-[#262626] p-3 transition duration-300 text-white font-semibold rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        width="1em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#0072b1"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </span>
                  </a>

                  <a
                    href="https://github.com/akmmirazhossain"
                    target="_blank"
                    class="bg-[#1D1D1D] hover:bg-[#262626] p-3 transition duration-300 text-white font-semibold rounded-md"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="#ffffff"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </span>
                  </a>

                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="bg-[#1D1D1D] hover:bg-[#262626] p-3 transition duration-300 text-white font-semibold rounded-md"
                  >
                    <span>
                      <svg
                        fill="#CD201F"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-7 rounded-2xl mt-1  bg-[#1D1D1D]">
                <div className="flex py-2.5 border-b border-[#3D3A3A]">
                  <span className="flex items-center justify-center px-3 py-2 bg-black rounded-md shadow-md h-9 w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      width="1em"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="#E93B81"
                        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
                      />
                    </svg>
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#A6A6A6]">Phone</p>
                    <p className="leading-3 text-white break-all">
                      <a
                        class="hover:text-[#FA5252] text-white duration-300 transition text-sm"
                        href="tel:+8801673692997"
                      >
                        +88 0167 369 2997
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex py-2.5 border-b border-[#3D3A3A]">
                  <span className="flex items-center justify-center px-3 py-2 bg-black rounded-md shadow-md h-9 w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      width="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#33cccc"
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      />
                    </svg>
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#A6A6A6]">Email</p>
                    <p className="leading-3 text-white break-all">
                      <a
                        class="hover:text-[#FA5252] text-white duration-300 transition text-xs"
                        href="mailto:akmmirazhossain@gmail.com"
                      >
                        akmmirazhossain@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex py-2.5 ">
                  <span className="flex items-center justify-center px-3 py-2 bg-black rounded-md shadow-md h-9 w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="#ff751a"
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#A6A6A6]">Location</p>
                    <p className="leading-3 text-white break-all">
                      <a
                        class="hover:text-[#FA5252] text-white duration-300 transition text-sm"
                        href="tel:+8801673692997"
                      >
                        Dhaka, Bangladesh
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="inline-flex  items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear text-md hover:from-[#DD2476] hover:to-[#FA5252] px-7 py-2 text-white rounded-[35px] mt-6"
                href="Files/AKM_Miraz_CV.pdf"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  />
                </svg>
                &nbsp;Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <header className="lg:w-[426px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-[#111111]">
            <nav class="hidden lg:block ">
              <ul className="flex text-xs justify-evenly">
                {TopNavButtonsList.map((item) => (
                  <TopNavBar key={item.id} item={item} button={true} />
                ))}
              </ul>
            </nav>
          </header>
          <div className="rounded-2xl bg-[#111111]">
            <div data-aos="fade" className="aos-init aos-animate">
              <section
                id="about"
                className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 "
              >
                <div className="pt-12 md:py-12 ">
                  <div className="flex items-center text-4xl text-white ">
                    <span class="after-effect"> About Me</span>
                    <div class="xs:w-12 md:w-40 ml-4 bg-gradient-to-r h-px rounded-lg from-[#FA5252] to-[#DD2476]"></div>
                  </div>
                  <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                      <div className="lg:mr-16">
                        <p className="leading-7 text-gray-lite text-[#7B7B7B]">
                          Hi, I'm AKM Miraz, a passionate frontend developer
                          with a love for crafting exceptional web experiences.
                          With 2 years of experience in the field, I'm dedicated
                          to turning ideas into stunning websites!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-[35px] text-white font-medium pt-7 pb-6">
                  What I do!
                </h3>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                  <div className="about-box">
                    <Image
                      src="/images/icons/front-development.png"
                      alt="My Image"
                      width={40}
                      height={40}
                      loading="lazy"
                      className="block object-contain w-10 h-10"
                    />
                    <div className="space-y-2 break-all">
                      <h3 className="text-xl font-semibold text-white">
                        Frontend
                      </h3>
                      <p className=" leading-8 text-gray-lite text-[#A6A6A6]">
                        I have 2 years exrience in the frontend developemnt. I
                        expertise lies in:
                      </p>
                      <div className="flex flex-wrap justify-start gap-1">
                        {/* <TechIcons img="js.png" alt="JavaScript" />
                        <TechIcons img="tailwind.png" alt="JavaScript" /> */}
                        <ButtonSkills title="React" />
                        <ButtonSkills title="JavaScript" />
                        <ButtonSkills title="Tailwind" />
                        <ButtonSkills title="NextJs" />
                        <ButtonSkills title="Jquery" />
                        <ButtonSkills title="  HTML/CSS" />
                      </div>
                    </div>
                  </div>

                  <div className="about-box">
                    <Image
                      src="/images/icons/backend.png"
                      alt="My Image"
                      width={40}
                      height={40}
                      className="block object-contain w-10 h-10"
                    />
                    <div className="space-y-2 break-all">
                      <h3 className="text-xl font-semibold text-white">
                        Backend & DB
                      </h3>
                      <p className=" leading-8 text-gray-lite text-[#A6A6A6]">
                        Proficient in PHP & Node for crafting APIs, backend
                        systems, web apps, and various other software solutions.
                      </p>

                      <div className="flex flex-wrap justify-start gap-1">
                        <ButtonSkills title="PHP" />
                        <ButtonSkills title="NodeJs" />
                        <ButtonSkills title="MySql" />
                      </div>
                    </div>
                  </div>

                  <div className="about-box">
                    <Image
                      src="/images/icons/devops.png"
                      alt="My Image"
                      width={40}
                      height={40}
                      className="block object-contain w-10 h-10"
                    />
                    <div className="space-y-2 break-all">
                      <h3 className="text-xl font-semibold text-white">
                        DevOps
                      </h3>
                      <p className=" leading-8 text-gray-lite text-[#A6A6A6]">
                        Proficiency in Linux, including server hosting with
                        Apache and Nginx.
                      </p>
                      <div className="flex flex-wrap justify-start gap-1">
                        <ButtonSkills title="Ubuntu Server" />
                        <ButtonSkills title="Google Cloud" />
                      </div>
                    </div>
                  </div>

                  <div className="about-box">
                    <Image
                      src="/images/icons/backend.png"
                      alt="My Image"
                      width={40}
                      height={40}
                      className="block object-contain w-10 h-10"
                    />
                    <div className="space-y-2 break-all">
                      <h3 className="text-xl font-semibold text-white">CMS</h3>
                      <p className=" leading-8 text-gray-lite text-[#A6A6A6]">
                        Experienced in website creation, plugin/theme
                        development, headless API development.
                      </p>
                      <div className="flex flex-wrap justify-start gap-1">
                        <ButtonSkills title="Wordpress" />
                        <ButtonSkills title="Drupal" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="works"
                className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 bg-[#0D0D0D]"
              >
                <div className="flex items-center pt-8 pb-5 text-4xl text-white">
                  <span class="after-effect"> My Works</span>
                  <div class="xs:w-12 md:w-40 ml-4 bg-gradient-to-r h-px rounded-lg from-[#FA5252] to-[#DD2476]"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                  {MyWorks.map((item, index) => (
                    <div
                      onClick={() => toggleModal(item)}
                      className="grid grid-flow-row text-white my-works"
                    >
                      <div className="overflow-hidden rounded-lg ">
                        <Image
                          src={`/images/demoss/${item.image}`}
                          alt="wadwa"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="transition-transform transform scale-100 hover:scale-105"
                        />
                      </div>
                      <span className="pt-5 text-[14px] font-normal text-gray-lite block text-[#A6A6A6]">
                        {item.type} &bull; {item.languages}
                      </span>
                      <div className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] text-white mt-2">
                        {item.title}
                      </div>
                    </div>
                  ))}

                  {isOpen && selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      <div
                        className="fixed inset-0 bg-black opacity-50 modal-overlay"
                        onClick={closeModal}
                      ></div>
                      {/* <WorkDetails item={isOpen.item} /> */}

                      <WorkDetails
                        isOpen={isOpen}
                        closeModal={closeModal}
                        item={selectedItem}
                        setIsOpenCld={setIsOpenCld}
                      />
                    </div>
                  )}
                </div>

                {/* <ModalBasic /> */}
              </section>

              <section
                id="resume"
                className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 bg-[#111111]"
              >
                <div className="flex items-center pt-8 pb-5 text-4xl text-white">
                  <span class="after-effect"> Resume</span>
                  <div class="xs:w-12 md:w-40 ml-4 bg-gradient-to-r h-px rounded-lg from-[#FA5252] to-[#DD2476]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                  <div>
                    <div className="flex items-center mb-4 space-x-2">
                      <div className="text-[28px] text-[#F95054]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z" />
                          <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
                        </svg>
                      </div>
                      <h4 class="text-xl  text-white font-semibold ">
                        Experience
                      </h4>
                    </div>

                    <div
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                      style={{ background: "transparent" }}
                    >
                      <span className="text-xs text-[#b7b7b7]">
                        2023 - Present
                      </span>
                      <h3 className="text-xl text-white">Frontend Developer</h3>
                      <p className="text-[#b7b7b7] text-sm">
                        Line Reflection Ltd.
                      </p>
                    </div>

                    <div
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                      style={{ background: "transparent" }}
                    >
                      <span className="text-xs text-[#b7b7b7]">
                        2021 - 2023
                      </span>
                      <h3 className="text-xl text-white">
                        Customer Success Engineer
                      </h3>
                      <p className="text-[#b7b7b7] text-sm">
                        Pantheon Systems Inc.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-4 space-x-2">
                      <div className="text-[28px] text-[#F95054]">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                        </svg>
                      </div>
                      <h4 class="text-xl  text-white font-semibold ">
                        Education
                      </h4>
                    </div>

                    <div
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                      style={{ background: "transparent" }}
                    >
                      <span className="text-xs text-[#b7b7b7]">
                        2016 - 2019
                      </span>
                      <h3 className="text-xl text-white">
                        BSc Computer Science & Eng.
                      </h3>
                      <p className="text-[#b7b7b7] text-sm">
                        Independent University Bangladesh
                      </p>
                    </div>

                    <div
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                      style={{ background: "transparent" }}
                    >
                      <span className="text-xs text-[#b7b7b7]">
                        2007 - 2012
                      </span>
                      <h3 className="text-xl text-white">O & A level</h3>
                      <p className="text-[#b7b7b7] text-sm">
                        Pearson Edexcel, International GCSE
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resume */}
              </section>

              <section>
                <div className="container bg-color-810 bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="col-span-1">
                      <h4 className="mb-6 text-xl font-semibold text-white">
                        Soft Skills
                      </h4>
                      <div className=" mb-7">
                        <div className="flex justify-between py-1">
                          <span className=" text-base text-gray-lite font-semibold text-[#A6A6A6]">
                            Creativity
                          </span>
                          <span className=" text-base font-semibold text-gray-lite pr-5 text-[#A6A6A6]">
                            95%
                          </span>
                        </div>
                        <div className="flex h-[0.170rem]">
                          <div className="flex-auto w-[95%] bg-red-500 " />
                          <div className="flex-auto w-[5%] bg-red-200" />
                        </div>
                      </div>

                      <div className=" mb-7">
                        <div className="flex justify-between py-1">
                          <span className=" text-base text-gray-lite font-semibold text-[#A6A6A6]">
                            Communication
                          </span>
                          <span className=" text-base font-semibold text-gray-lite pr-5 text-[#A6A6A6]">
                            92%
                          </span>
                        </div>
                        <div className="flex h-[0.170rem]">
                          <div className="flex-auto w-[92%] bg-blue-500 " />
                          <div className="flex-auto w-[8%] bg-blue-200" />
                        </div>
                      </div>

                      <div className=" mb-7">
                        <div className="flex justify-between py-1">
                          <span className=" text-base text-gray-lite font-semibold text-[#A6A6A6]">
                            Problem Solving
                          </span>
                          <span className=" text-base font-semibold text-gray-lite pr-5 text-[#A6A6A6]">
                            93%
                          </span>
                        </div>
                        <div className="flex h-[0.170rem]">
                          <div className="flex-auto w-[93%] bg-purple-500 " />
                          <div className="flex-auto w-[7%] bg-purple-200" />
                        </div>
                      </div>

                      <div className=" mb-7">
                        <div className="flex justify-between py-1">
                          <span className=" text-base text-gray-lite font-semibold text-[#A6A6A6]">
                            Leadership
                          </span>
                          <span className=" text-base font-semibold text-gray-lite pr-5 text-[#A6A6A6]">
                            87%
                          </span>
                        </div>
                        <div className="flex h-[0.170rem]">
                          <div className="flex-auto w-[87%] bg-green-500 " />
                          <div className="flex-auto w-[13%] bg-green-200" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <h4 className="mb-6 text-xl font-semibold text-white">
                        Knowledges
                      </h4>
                      <div className="flex flex-wrap gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3">
                        <ButtonSkills title="Git" />
                        <ButtonSkills title="Docker" />
                        <ButtonSkills title="CI/CD" />
                        <ButtonSkills title="CLIs" />
                        <ButtonSkills title="Nginx" />
                        <ButtonSkills title="Docker" />
                        <ButtonSkills title="CDN" />
                        <ButtonSkills title="Composer" />
                        <ButtonSkills title="PHPMyAdmin" />
                        <ButtonSkills title="Zendesk" />
                        <ButtonSkills title="Intercom" />
                        <ButtonSkills title="Redis" />
                        <ButtonSkills title="Solr" />
                        <ButtonSkills title="SSO" />
                        <ButtonSkills title="Wordpress" />
                        <ButtonSkills title="Atlassian" />
                        <ButtonSkills title="New Relic" />
                        <ButtonSkills title="Slack" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* //SKILLS */}

              <section
                id="contact"
                className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14 "
              >
                <div className="flex items-center pt-8 pb-5 text-4xl text-white ">
                  <span class="after-effect"> Contact</span>
                  <div class="xs:w-12 md:w-40 ml-4 bg-gradient-to-r h-px rounded-lg from-[#FA5252] to-[#DD2476]"></div>
                </div>

                <div className="  border-[#212425] border-2  md:p-[48px]  p-4   bg-color-810 rounded-xl bg-[#111111] mb-[30px] md:mb-[60px]">
                  <h3 className="text-4xl text-white">
                    <span className="text-gray-lite text-[#A6A6A6] text-sm sm:text-base md:text-lg lg:text-2xl">
                      Feel free to reach out to me anytime,
                    </span>
                    <br />
                    <span className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-2xl">
                      I'm always open.
                    </span>
                  </h3>
                  <form id="myForm">
                    <div className="relative z-0 w-full mt-[40px] mb-8 group">
                      <input
                        type="text"
                        name="name"
                        className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                      >
                        Name *
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                      <input
                        type="email"
                        name="user_email"
                        className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0  peer"
                        placeholder=" "
                        id="user_email"
                        required
                      />
                      <label
                        htmlFor="user_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                      >
                        Email *
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                      <input
                        type="text"
                        name="message"
                        className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0  peer"
                        placeholder=" "
                        id="message"
                        required
                      />
                      <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                      >
                        Message *
                      </label>
                    </div>
                    <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                      <input
                        type="submit"
                        className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white text-white "
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <ScreenWidthPrinter />
    </div>
  );
}
