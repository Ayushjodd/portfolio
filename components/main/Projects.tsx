import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { Badge } from "../ui/badge";
import { FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Projects 🚀</h1>
        <div className="flex gap-4 mb-4">
          <ShineBorder
            className="relative flex h-[250] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="text-center font-mono text-xl  my-3 flex">
              <span className="text-[#fbd16c] ">Xemen</span>
              <span className="ml-2 text-blue-500">
                <FaLink />
              </span>
              <span className="ml-2 ">
                <FiGithub />
              </span>
            </span>
            <p className="text-[#9ca3af] mb-2">
              Xemen is a decentralized marketplace with a clean and modern UI.
              Key features include: Authentication , List and Browse Items , Key
              Pair generation , Purchasing , Secured by Solana blockchain
            </p>
            <div className="">
              <Badge variant="secondary" className="mr-2 mt-2">
                NextJS
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                ShadCN
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                NextAuth
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Solana/web3js
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Postgress → Prisma
              </Badge>
            </div>
          </ShineBorder>

          <ShineBorder
            className="relative flex h-[250] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="text-center font-mono text-xl  my-3 flex">
              <span className="text-[#fbd16c] ">Nexus-Quill</span>
              <span className="ml-2 text-blue-500">
                <FaLink />
              </span>
              <span className="ml-2 ">
                <FiGithub />
              </span>
            </span>
            <p className="text-[#9ca3af] mb-2">
              Nexus-Quill is a medium-like blogging platform where users can
              create, edit, and share articles. Developed using Hono for the
              backend and React for the frontend, it offers
            </p>
            <div className="">
              <Badge variant="secondary" className="mr-2 mt-2">
                ReactJs
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                HONO
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                zod+bycrypt+jwt
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Postgress → Prisma
              </Badge>
            </div>
          </ShineBorder>
        </div>
        <div className="flex gap-4">
          <ShineBorder
            className="relative flex h-[250] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="text-center font-mono text-xl  my-3 flex">
              <span className="text-[#fbd16c] ">Paytm</span>
              <span className="ml-2 text-blue-500">
                <FaLink />
              </span>
              <span className="ml-2 ">
                <FiGithub />
              </span>
            </span>
            <p className="text-[#9ca3af] mb-2">
              This Paytm-inspired application allows users to manage finances
              securely and efficiently. Developed using the MERN stack
            </p>
            <div className="">
              <Badge variant="secondary" className="mr-2 mt-2">
                ReactJs
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                zod+bycrypt+jwt
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Express
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                MongoDB
              </Badge>
            </div>
          </ShineBorder>

          <ShineBorder
            className="relative flex h-[250] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="text-center font-mono text-xl  my-3 flex">
              <span className="text-[#fbd16c] ">Evently</span>
              <span className="ml-2 text-blue-500">
                <FaLink />
              </span>
              <span className="ml-2 ">
                <FiGithub />
              </span>
            </span>
            <p className="text-[#9ca3af] mb-2">
              the events application stands as a comprehensive, full-stack
              platform for managing events. It serves as a hub, spotlighting
              diverse events taking place globally. You can list your own event
              or join others
            </p>
            <div className="">
              <Badge variant="secondary" className="mr-2 mt-2">
                NextJS
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Tailwind
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                ShadCN
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                Clerk
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                uploadthing
              </Badge>
              <Badge variant="secondary" className="mr-2 mt-2">
                MongoDB
              </Badge>
            </div>
          </ShineBorder>
        </div>
      </div>
    </>
  );
};

export default Projects;
