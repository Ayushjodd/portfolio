/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge } from "../ui/badge";
import { FiMail } from "react-icons/fi";
import { Button } from "../ui/button";
import { BiPhoneCall } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <header>
        <div className="text-center">
          <div className="flex">
            <h1 className="text-3xl font-bold">Ayush Jodd</h1>
            <span className="mt-1 ml-2">
              <Badge>Hire Me!</Badge>
            </span>
          </div>
        </div>
        <div className="flex justify-between border">
          <p className="pt-10 text-[#9ca3af]">
            🗣️Hi, I’m Ayush, a passionate developer from India 🇮🇳 . I am a full
            stack developer, Blockchain enthusiast proficiant in solidity
            currently learning Solana development🗿
          </p>

          <img
            className="rounded-lg mt-3"
            width={200}
            height={200}
            alt="my image"
            src="https://utfs.io/f/7ce4b229-2a54-4b59-adc8-2420c60fb2e9-7lisbg.jpg"
          />
        </div>
        <div className="">
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer "
          >
            <FiMail />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer"
          >
            <BiPhoneCall />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer"
          >
            <FaGithub />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer"
          >
            <FaLinkedin />
          </Button>
          <Button
            variant="ghost"
            className="text-xl hover:bg-gray-200 p-2 cursor-pointer"
          >
            <BsTwitterX />
          </Button>
        </div>
      </header>
    </>
  );
};
