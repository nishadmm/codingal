import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import EndClassModal from "../modal/EndClassModal";
import CountDownTimer from "./CountDownTimer";
import Logo from "../assets/logo.jpg";
import LogoWithText from "../assets/Logo-with-text.png";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const MinSecs = { minutes: 10, seconds: 0 };
  const [endCountDown, setEndCountDown] = useState(false);

  return (
    <>
      <nav className="md:flex items-center px-4 pt-1 flex-row  md:space-x-4  relative">
        <div className="flex w-full md:w-auto justify-between">
          <Link to="/" className="pr-4 py-4 md:border-r border-gray-300">
            <img
              src={Logo}
              alt=""
              className="rounded-md hidden md:block"
              width={60}
            />
            <img
              src={LogoWithText}
              alt=""
              className="rounded-md md:hidden block"
              width={180}
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className=" md:hidden flex items-center  text-gray-600 p-1"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <XIcon className="h-10 w-10" />
            ) : (
              <MenuIcon className="h-10 w-10" />
            )}
          </button>
        </div>

        <div
          className="md:py-4 md:px-8 py-1 flex justify-between"
          style={{ width: "100%" }}
        >
          <h5 className="text-gray-600 font-medium text-lg hidden md:block">
            Trial Lesson[Grade 1-3]
          </h5>
          <div
            className={`${
              mobileNav ? "flex" : "hidden"
            } items-center flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 font-semibold w-full md:w-auto p-6 md:p-0 md:flex  shadow-lg rounded-lg border border-red-100 md:border-none md:shadow-none`}
          >
            <Link to="/posts" className="px-5 py-2 text-sm font-medium md:text-lg  text-red-500 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-red-400 hover:text-white">
              Posts
            </Link>
            <h5 className=" text-gray-500 font-medium md:text-lg">
              <CountDownTimer MinSecs={MinSecs} endCountDown={endCountDown} />
            </h5>
            <button
              className="px-5 py-2 text-sm font-medium md:text-lg bg-red-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={() => setShowModal(true)}
            >
              End class
            </button>
          </div>
        </div>
      </nav>
      {showModal && (
        <EndClassModal
          setShowModal={setShowModal}
          setEndCountDown={setEndCountDown}
        />
      )}
    </>
  );
};

export default Navbar;
