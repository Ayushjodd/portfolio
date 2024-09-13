/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiMail } from "react-icons/fi";
import { Button } from "../ui/button";
import { BiPhoneCall } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";

import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <div className="flex  mt-2">
          <p className="pt-12 text-[#9ca3af]">
            🗣️"Hey, I’m Ayush—a passionate full-stack developer crafting sleek
            web experiences with Next.js and diving deep into Web3, building
            dApps, and exploring the future of Solana!" 🗿
            <Link href={"https://maps.app.goo.gl/YBbvnjn4nqhkh19VA"}>
              <span className="flex  mt-2 ">
                <span className="flex gap-2 hover:underline hover:text-blue-500">
                  <span className="text-xl">
                    <FaGlobeAmericas />
                  </span>
                  My Location
                </span>
              </span>
            </Link>
          </p>

          <img
            className="rounded-lg "
            width={300}
            height={200}
            alt="my image"
            src="https://utfs.io/f/7ce4b229-2a54-4b59-adc8-2420c60fb2e9-7lisbg.jpg"
          />
        </div>
        <div className="">
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer dark:hover:text-black"
          >
            <FiMail />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer dark:hover:text-black"
          >
            <BiPhoneCall />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer dark:hover:text-black"
          >
            <FaGithub />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer dark:hover:text-black"
          >
            <FaLinkedin />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer dark:hover:text-black"
          >
            <BsTwitterX />
          </Button>
        </div>
      </header>
    </>
  );
};
