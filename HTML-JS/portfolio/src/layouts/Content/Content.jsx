import React, { useEffect, useState } from "react";

import IMAGES from "@constants/imgUrl";

import { FishTank, Card } from "@components/ui";

import { HomeStyle } from "@components/styles";

// import styled from "styled-components";

import { TypeAnimation } from "react-type-animation";

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

import prjsData from '@data/projects.json'
import tabData from '@data/tabData'

import classNames from "classnames/bind";
const cx = classNames.bind(HomeStyle);

export default function Content() {
  // handle select tab
  const [activeTab, setActiveTab] = useState(0);
  const getActiveTabStyle = (tabValue) => {
    return activeTab === tabValue
      ? { backgroundColor: 'black', color: 'cyan', borderBottom: '2px solid cyan', outline: 0 }
      : {};
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // useEffect(() => { // ok
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
                <a className="text-blue-400 hover:text-blue-500" href="https://github.com/MaiNhatHoangY2001/converse-bot">Learning-English-Gemini-app</a>
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
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  value={index}
                  className="hover:text-[cyan]"
                  style={getActiveTabStyle(index)}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabsList>
            {tabData.map((tab, index) => (
              <TabPanel key={index} value={index}>
                {tab.content}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 3rd section_projects */}
      <section className={cx(["trdSection", "pl-6 pr-6 flex flex-col gap-6"])}>
        <div className={cx(["sectionTitle", "text-[cyan] text-[2.5rem]"])}>Projects</div>
        {/* <ProjectsList /> */}
        <div className="grid grid-cols-4 gap-6 place-items-center">
          {prjsData.map((item, index) => (
            <Card key={index} prj={item} />
          ))}
        </div>
      </section>

    </FishTank>
  )
}