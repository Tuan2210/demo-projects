import React from "react";
import { CollapsibleSection } from "@components/ui";

const tabData = [
  {
    label: "Main Skills", content: (
      <>
        <CollapsibleSection title="Web Development" content="Java, Spring-Boot, Java Swing, Jsp | Servlet, MVC, Restful API, JS-HTML-CSS | SCSS, ReactJS, NodeJS, Bootstrap | Tailwind" />
        <CollapsibleSection title="Mobile Development" content="React-Native, Expo, Java, Android" />
        <CollapsibleSection title="Database" content="SQL Server, MySQL, MongoDB, Firebase, SQLite" />
      </>
    )
  },
  { label: "Other Skills", content: "Typescript, Docker, Socket.io, JWT, SCSS, Angular, Oracle SQL, Python, Drawing 2D" },
  {
    label: "Experience", content: (
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-base text-orange-400">2023</p>
          <p className="text-base">HCLTech Vietnam - Internship Full-stack Developer</p>
        </div>
        <div>
          <p className="text-base text-orange-400">2024</p>
          <p className="text-base">Sparkminds - Fresher Front-end Developer</p>
        </div>
      </div>
    )
  },
  {
    label: "Education", content: (
      <>
        <div className="text-base">
          <span className="text-base text-orange-400">Industrial University</span> of HCMC (IUH)
        </div>
        <div className="text-base">
          <span className="text-base text-orange-400">Major:</span> Software Engineering
        </div>
      </>
    )
  },
  { label: "Information", content: <div className="">Info</div> },
];

export default tabData