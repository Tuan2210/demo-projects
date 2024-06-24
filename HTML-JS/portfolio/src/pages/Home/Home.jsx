import React from "react";

import { Header, Content } from "@layouts"

import IMAGES from "@constants/imgUrl";

// import styles from "@components/styles/Home.module.scss"
import { HomeStyle } from "@components/styles";
import classNames from "classnames/bind";

// https://react-type-animation.netlify.app
// https://github.com/maxeth/react-type-animation
import { TypeAnimation } from 'react-type-animation';

const cx = classNames.bind(HomeStyle);

export default function Home() {
  return (
    <div>
      <div className={cx(["parallax", "relative overflow-hidden z-0"])}>
        <img src={IMAGES.night_sky} alt="night-sky" className={cx(["sky", ""])} />
        <img src={IMAGES.stars} alt="stars1" className={cx(["stars1", "left-[-50%]"])} />
        <img src={IMAGES.stars} alt="stars2" className={cx(["stars2", "left=[50%]"])} />
        <img src={IMAGES.moon} alt="moon" className={cx(["moon", "mix-blend-screen"])} />
        <img src={IMAGES.flying_bird1} alt="bird1" className={cx(["bird1", ""])} />
        <img src={IMAGES.flying_bird2} alt="bird2" className={cx(["bird2", ""])} />
        <img src={IMAGES.flying_bird2} alt="bird3" className={cx(["bird3", ""])} />
        <img src={IMAGES.night_sea} alt="night-sea" className={cx(["sea", ""])} />
        <TypeAnimation
          className={cx(["lblWelcome", "absolute z-[1] top-[50%] left-[50%] text-6xl"])}
          sequence={['Welcome!', 0]}
          speed={20}
          repeat={0}
          cursor={false}
        />
      </div>
      <div className={cx(["portfolio-container", "relative overflow-hidden"])}>
        <Header />
        <Content />
      </div>
    </div>
  )
}
