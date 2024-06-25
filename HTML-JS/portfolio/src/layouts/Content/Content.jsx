import React, { useEffect, useState } from "react";

import IMAGES from "@constants/imgUrl";

import { FishTank } from "@components/ui";

import { HomeStyle } from "@components/styles";

import styled from "styled-components";

import { TypeAnimation } from "react-type-animation";

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Collapse } from 'react-collapse';

import classNames from "classnames/bind";
const cx = classNames.bind(HomeStyle);

export default function Content() {
  // handle select tab
  // const [display1, setDisplay1] = useState('block')
  // const [display2, setDisplay2] = useState('hidden')
  // const [display3, setDisplay3] = useState('hidden')
  const [activeTab, setActiveTab] = useState(0);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const onSelect = (index) => {
  //   setSelectedIndex(index)
  //   switch (index) {
  //     case 0:
  //       setDisplay1('block')
  //       setDisplay2('hidden')
  //       setDisplay3('hidden')
  //       break;
  //     case 1:
  //       setDisplay1('hidden')
  //       setDisplay2('block')
  //       setDisplay3('hidden')
  //       break;
  //     case 2:
  //       setDisplay1('hidden')
  //       setDisplay2('hidden')
  //       setDisplay3('block')
  //       break;
  //     default:
  //       break;
  //   }
  // }

  const getActiveTabStyle = (tabValue) => {
    return activeTab === tabValue
      ? { backgroundColor: 'black', color: 'cyan', borderBottom: '2px solid cyan', outline: 0 }
      : {};
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // handle collapse
  const CollapsibleSection = ({ title, content }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
      <div>
        <Button
          variant="text"
          sx={{ textTransform: 'none' }}
          size="large"
          color="warning"
          className="hover:text-[cyan]"
          onClick={() => setIsOpened(!isOpened)}
        >
          {!isOpened ? <ArrowRightIcon fontSize="medium" /> : <ArrowDropDownIcon fontSize="medium" />}
          {title}
        </Button>
        <Collapse isOpened={isOpened}>
          <p className="ml-[2%] text-base">{content}</p>
        </Collapse>
      </div>
    );
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     console.log('scrollY: ', window.scrollY);
  //   });
  // }, [])

  return (
    <FishTank>
      {/* 1st section_introduce */}
      <section className={cx(["fstSection", "w-full grid grid-cols-[auto_35%]"])}>
        {/* left 1st */}
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className={cx(["hiTxt", "text-[4rem] text-center"])}>
            Hi, I'm
            <span className="text-[cyan] text-[4rem]"> Dinh Quang Tuan </span>
            from Vietnam
          </div>
          <div className="text-3xl">
            I'm a{" "}
            <TypeAnimation
              className="italic text-[cyan] text-3xl"
              sequence={[
                'web developer',
                2000,
                'mobile developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
        {/* right 1st */}
        <div className="w-full flex items-center justify-center">
          <img src={IMAGES.avatar} alt="avatar" />
        </div>
      </section>

      {/* 2nd section_about */}
      <section className={cx(["sndSection", "grid grid-cols-[30%_auto]"])}>
        {/* left 2nd */}
        <div className="w-full flex items-center justify-center">
          <img src={IMAGES.dev} alt="dev" />
        </div>
        {/* right 2nd */}
        <div className="w-full h-fit flex flex-col text-left pl-2 pr-2 gap-5">
          <div className="grid grid-cols-4 h-fit gap-2">
            <div className={cx(["sectionTitle", "col-span-4 text-[cyan] text-[2.5rem]"])}>About me</div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <p>I'm current working on</p>
                <a className="text-blue-400 hover:text-blue-500" href="https://github.com/MaiNhatHoangY2001/converse-bot">Learning English Gemini-app</a>
              </div>
              <p className="text-justify">
                My major is Software Engineering. I'm look forward to finding a fresher full-time job.<br />
                As a graduated student from Industrial University of HCMC, without much experience,
                all I have are passion, responsibility and sincerity.
              </p>
            </div>
          </div>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <TabsList className="flex gap-6 mb-1">
              <Tab value={0} className="hover:text-[cyan]" style={getActiveTabStyle(0)}>Main Skills</Tab>
              <Tab value={1} className="hover:text-[cyan]" style={getActiveTabStyle(1)}>Other Skills</Tab>
              <Tab value={2} className="hover:text-[cyan]" style={getActiveTabStyle(2)}>Experience</Tab>
              <Tab value={3} className="hover:text-[cyan]" style={getActiveTabStyle(3)}>Education</Tab>
            </TabsList>
            <TabPanel value={0}>
              {/* collapse web-dev-skills */}
              <CollapsibleSection title="Web Developer" content="Java, Spring-Boot, Java Swing, Jsp/Servlet, MVC, Restful API, JS-HTML-CSS, ReactJS, NodeJS, Bootstrap/Tailwind" />
              {/* collapse mobile-dev-skills */}
              <CollapsibleSection title="Mobile Developer" content="React-Native, Expo, Java, Android" />
              {/* collapse db */}
              <CollapsibleSection title="Database" content="SQL Server, MySQL, MongoDB, Firebase, SQLite" />
            </TabPanel>
            <TabPanel value={1}>Typescript, Docker, Socket.io, JWT, SCSS, Angular, Oracle SQL, Python, Drawing 2D</TabPanel>
            <TabPanel value={2} className="flex flex-col gap-4">
              <div>
                <p className="text-base text-orange-400">2023</p>
                <p className="text-base">HCLTech Vietnam - Internship Full-stack Developer</p>
              </div>
              <div>
                <p className="text-base text-orange-400">2024</p>
                <p className="text-base">Sparkminds - Fresher Front-end Developer</p>
              </div>
            </TabPanel>
            <TabPanel value={3}>
              <div className="text-base">
                <span className="text-base text-orange-400">Industrial University</span> of HCMC (IUH)
              </div>
              <div className="text-base">
                <span className="text-base text-orange-400">Major:</span> Software Engineering
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      {/* 3rd section_services */}
      <section className={cx(["trdSection", ""])}>
        <div className={cx(["sectionTitle", "text-[cyan] text-[2.5rem]"])}>Services</div>
      </section>

    </FishTank>
  )
}