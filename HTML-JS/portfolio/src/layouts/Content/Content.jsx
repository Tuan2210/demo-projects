import React, { useEffect } from "react";

import IMAGES from "../../constants/imgUrl";

import { FishTank } from "../../components/ui";

import { HomeStyle } from "../../components/styles";

import styled from "styled-components";

import { TypeAnimation } from "react-type-animation";

import classNames from "classnames/bind";
const cx = classNames.bind(HomeStyle);

export default function Content() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrollY: ', window.scrollY);
    });
  }, [])

  return (
    <FishTank>
      {/* 1st section */}
      <section className={cx(["fstSection", "w-full h-[500px] grid grid-cols-[auto_35%]"])}>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className={cx(["hiTxt", "text-[4rem] text-center"])}>
            Hi, I'm 
            <span className="text-[cyan]"> Dinh Quang Tuan </span> 
            from Vietnam
          </div>
          <div className="text-3xl">
            I'm a{" "}
            <TypeAnimation 
              className="italic text-[cyan]"
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
        <div className="w-full flex items-center justify-center">
          <img src={IMAGES.avatar} alt="avatar" />
        </div>
      </section>
      
      {/* 2nd section */}
      <section className={cx(["sndSection", "grid grid-cols-[35%_auto] bg-[red]"])}>
        <div className="w-full flex items-center justify-center">
          <div className="text-white">HELLO</div>
        </div>
        <div className="w-full flex flex-col justify-center items-center"></div>
      </section>

    </FishTank>
  )
}