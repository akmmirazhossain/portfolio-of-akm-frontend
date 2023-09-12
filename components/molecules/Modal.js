import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorkDetails from "./WorkDetails";

export default function ModalBasic() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <button
        onClick={toggleModal}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        Open Modal
      </button> */}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50 modal-overlay"
            onClick={closeModal}
          ></div>

          <WorkDetails
            title="Software QA Website"
            type="Website"
            languages="React, NextJs, Tailwind"
            url="https://sqa-akmmirazhossain.vercel.app/"
            description='The frontend of this website was built by me, the initial design was
            given in figma. <br />
            More links: <br />
            <a
              className="text-xs text-blue-600"
              href="https://sqa-akmmirazhossain.vercel.app/inspection-manager-module"
              target="_blank"
            >
              https://sqa-akmmirazhossain.vercel.app/inspection-manager-module
            </a>
            <br />
            <a
              className="text-xs text-blue-600"
              href="https://sqa-akmmirazhossain.vercel.app/community"
              target="_blank"
            >
              https://sqa-akmmirazhossain.vercel.app/community
            </a>
            <br />
            <a
              className="text-xs text-blue-600"
              href="https://sqa-akmmirazhossain.vercel.app/enterprise"
              target="_blank"
            >
              https://sqa-akmmirazhossain.vercel.app/enterprise
            </a>'
          />
        </div>
      )}
    </div>
  );
}
