import React from "react";
import { Badge } from "../ui/badge";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const projectsData = [
  {
    liveLink: "https://xemen.vercel.app",
    githubLink: "https://github.com/ayushjodd/xemen",
    name: "Xemen",
    description:
      "Xemen is a decentralized marketplace with a clean and modern UI. Key features include: Authentication , List and Browse Items , Key Pair generation , Purchasing , Secured by Solana blockchain",
    techStack: [
      "NextJS",
      "Tailwind",
      "ShadCN",
      "NextAuth",
      "Solana/web3js",
      "Postgress → Prisma",
    ],
  },
  {
    liveLink: "https://nexus-quill.vercel.app/",
    githubLink: "https://github.com/Ayushjodd/Nexus-Quill",
    name: "Nexus-Quill",
    description:
      "Nexus-Quill is a medium-like blogging platform where users can create, edit, and share articles. Developed using Hono for the backend and React for the frontend.",
    techStack: [
      "ReactJs",
      "Tailwind",
      "HONO",
      "zod+bycrypt+jwt",
      "Postgress → Prisma",
    ],
  },
  {
    liveLink: "",
    githubLink: "https://github.com/ayushjodd/paytm",
    name: "Paytm",
    description:
      "This Paytm-inspired application allows users to manage finances securely and efficiently. Developed using the MERN stack.",
    techStack: ["ReactJs", "Tailwind", "zod+bycrypt+jwt", "Express", "MongoDB"],
  },
  {
    liveLink: "https://event-app-three-swart.vercel.app/",
    githubLink: "https://github.com/ayushjodd/Event-app",
    name: "Evently",
    description:
      "The events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally.",
    techStack: [
      "NextJS",
      "Tailwind",
      "ShadCN",
      "Clerk",
      "uploadthing",
      "MongoDB",
    ],
  },
];

const Projects = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Projects 🚀</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {projectsData.map((project, index) => (
            <NeonGradientCard
              key={index}
              className="max-w-sm items-center justify-center text-center"
            >
              <span className="text-center font-mono text-xl my-3 flex">
                <span className="text-[#fbd16c] text-2xl">{project.name}</span>
                <Button
                  variant={"ghost"}
                  className="ml-2 text-xl "
                  onClick={() => {
                    router.push(project.liveLink);
                  }}
                >
                  <FiExternalLink />
                </Button>
                <Button
                  onClick={() => {
                    router.push(project.githubLink);
                  }}
                  variant={"ghost"}
                  className="ml-2  text-xl"
                >
                  <FiGithub />
                </Button>
              </span>
              <p className="text-[#9ca3af] mb-2">{project.description}</p>
              <div>
                {project.techStack.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="mr-2 mt-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
