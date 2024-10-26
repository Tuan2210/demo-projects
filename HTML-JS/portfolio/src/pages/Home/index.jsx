import React, { useEffect, useState } from "react";

import { Header, Main, Footer } from "@layouts"

import { usePageScroll } from "@hooks/useScroll";
import useVisitCount from "@hooks/useVisitCount";

import IMAGES from "@constants/imgUrl";

// import styles from "@components/styles/Home.module.scss"
import { HomeStyle } from "@components/styles";
import classNames from "classnames/bind";

// https://react-type-animation.netlify.app
// https://github.com/maxeth/react-type-animation
import { TypeAnimation } from 'react-type-animation';

const cx = classNames.bind(HomeStyle);

export default function Home() {
  const {
    stars1Ref,
    stars2Ref,
    moonRef,
    bird1Ref,
    bird2Ref,
    bird3Ref,
  } = usePageScroll();

  // visits count
  const visits = useVisitCount()

  return (
    <div>
      <div className={cx(["parallax", "relative overflow-hidden z-0"])}>
        <img src={IMAGES.night_sky} alt="night-sky" className={cx(["sky", ""])} />
        <img src={IMAGES.stars} alt="stars1" ref={stars1Ref} className={cx(["stars1", "left-[-50%]"])} />
        <img src={IMAGES.stars} alt="stars2" ref={stars2Ref} className={cx(["stars2", "left-[50%]"])} />
        <img src={IMAGES.moon} alt="moon" ref={moonRef} className={cx(["moon", "mix-blend-screen object-contain"])} />
        {/* <img src={IMAGES.flying_bird1} alt="bird1" ref={bird1Ref} className={cx(["bird1", ""])} /> */}
        <img src={IMAGES.flying_bird2} alt="bird2" ref={bird2Ref} className={cx(["bird2", ""])} />
        <img src={IMAGES.flying_bird2} alt="bird3" ref={bird3Ref} className={cx(["bird3", ""])} />
        <img src={IMAGES.night_sea} alt="night-sea" className={cx(["sea", ""])} />
        {/* <TypeAnimation
          className={cx(["lblWelcome", "absolute z-[1] top-[50%] left-[50%] text-6xl"])}
          sequence={['Welcome!', 0]}
          speed={20}
          repeat={0}
          cursor={false}
        /> */}

        {/* decorate halloween */}
        <img src={IMAGES.bats} alt="bats" ref={bird1Ref} className={cx(["bird1", ""])} />
        {/* label halloween */}
        <TypeAnimation
          className={cx(["lblHalloween", "absolute z-[1] top-[50%] left-[50%] text-5xl text-center"])}
          sequence={['HAPPY HALLOWEEN!', 0]}
          speed={20}
          repeat={0}
          cursor={false}
        />
        {/* ///////////////////////// */}
      </div>
      <div className={cx(["portfolio-container", "relative overflow-hidden max-w-full"])}>
        <Header />
        <Main />
        <Footer visits={visits} />
      </div>
    </div>
  )
}
