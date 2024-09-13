import React from "react";
import { Badge } from "../ui/badge";

const Skills = () => {
  const skills = {
    Frontend: ["TypeScript", "React/Next.js", "Tailwind"],
    Backend: ["Node.js/Express.js", "SQL/NoSQL → Prisma", "WebSockets"],
    Authentication: [
      "NextAuth ",
      " Clerk",
      " FireBase",
      " JWT",
      "zod",
      "bycryptJS",
    ],
    General: [
      "DataStructures/Algorithms",
      "Networking/Infrastructure",
      "Linux",
      "git/Github",
    ],
    "DevOps/Cloud": [
      "Docker",
      "Kafka",
      "Redis → pub/subs",
      "Prometheus/Grafana",
      "Microservices",
    ],
    Other: ["Touch Typing → 80wpm"],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Skills ⚙️</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold">{category}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsList.map((skill, idx) => (
                <Badge key={idx} className="bg-[#c8c9cd]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
