"use client";

import React, { useState } from "react";
import PromotionBanner from "./PromotionBanner";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <PromotionBanner />
      <div className="flex justify-between items-center lg:px-20 lg:pb-4 px-5 pt-5 pb-12 relative border-b-2 border-gray-200">
        <div>
          <p className="font-bold text-xl">Exclusive</p>
        </div>
        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-12">
              <li className="text-sm cursor-pointer">Home</li>
              <li className="text-sm cursor-pointer">Contact</li>
              <li className="text-sm cursor-pointer">About</li>
              <li className="text-sm cursor-pointer">Sign Up</li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div>
            <div className="flex items-center bg-gray-100 py-2 px-6 rounded-sm gap-2">
              <input
                type="text"
                className="outline-none bg-gray-100 text-sm"
                placeholder="What are you looking for"
              />
              <MagnifyingGlassIcon height={25} width={25} />
            </div>
          </div>
          <div>
            <HeartIcon
              height={25}
              width={35}
              className="cursor-pointer text-gray-700"
            />
          </div>
          <div>
            <IoCartOutline size={29} className="cursor-pointer text-gray-700" />
          </div>
        </div>
        <div className="lg:hidden block">
          <button onClick={() => setShowMobileMenu(true)}>
            <HamburgerMenuIcon className="w-[28px] h-[28px]" />
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <div className="block lg:hidden">
          <div className="fixed top-0 right-0 w-full h-full bg-white z-[100000] overflow-auto">
            <PromotionBanner />
            <div className="bg-gradient-to-b px-5 from-white to-[rgba(255,255,255,0.3)] pt-5 pb-12 sticky top-0 flex items-center justify-between">
              <div>
                <p className="font-bold text-xl">Exclusive</p>
              </div>
              <button onClick={() => setShowMobileMenu(false)}>
                <Cross1Icon className="w-[28px] h-[28px]" />
              </button>
            </div>
            <div className="pb-12 px-10">
              <nav className="mobile relative">
                <ul className="p-0 space-y-10">
                  <li className="text-[1.3rem]">Home</li>
                  <li className="text-[1.3rem]">Contact</li>
                  <li className="text-[1.3rem]">About</li>
                  <li className="text-[1.3rem]">Sign Up</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
