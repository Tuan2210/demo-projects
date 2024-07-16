import React from "react";
import { Collapse } from "@components/ui";

import { MainStyle } from "@components/styles";
import classNames from "classnames/bind";
const cx = classNames.bind(MainStyle);

const tabData = [
  {
    label: "Main Skills", content: (
      <>
        <Collapse title="Web Development" content="Java, Spring-Boot, Java Swing, Jsp | Servlet, MVC, Restful API, JS-HTML-CSS | SCSS, ReactJS, NodeJS, Bootstrap | Tailwind" />
        <Collapse title="Mobile Development" content="React-Native, Expo, Java, Android" />
        <Collapse title="Database" content="SQL Server, MySQL, MongoDB, Firebase, SQLite" />
      </>
    )
  },
  {
    label: "Other Skills", content: (
      <p className={cx("tabPanelContent")}>Typescript, Docker, Socket.io, JWT, SCSS, Angular, Oracle SQL, Python, Drawing 2D</p>
    )
  },
  {
    label: "Experience", content: (
      <div className="flex flex-col gap-4">
        <div>
          <p className={cx(["tabPanelContent", "text-base text-[cyan]"])}>2023</p>
          <p className={cx(["tabPanelContent", "text-base"])}>HCLTech Vietnam - Internship Full-stack Developer</p>
        </div>
        <div>
          <p className={cx(["tabPanelContent", "text-base text-[cyan]"])}>2024</p>
          <p className={cx(["tabPanelContent", "text-base"])}>Sparkminds - Fresher Front-end Developer</p>
        </div>
      </div>
    )
  },
  {
    label: "Education", content: (
      <>
        <div className={cx(["tabPanelContent", "text-base"])}>
          <span className={cx(["tabPanelContent", "text-base text-[cyan]"])}>Industrial University</span> of HCMC (IUH)
        </div>
        <div className={cx(["tabPanelContent", "text-base"])}>
          <span className={cx(["tabPanelContent", "text-base text-[cyan]"])}>Major:</span> Software Engineering
        </div>
      </>
    )
  },
];

export default tabData