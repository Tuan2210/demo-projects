import React from "react";

import IMAGES from "../../assets/imgs";

import styles from "../../components/styles/Home.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div>
      <section className={cx(["parallax", "overflow-hidden z-0"])}>
        <img src={IMAGES.night_skyy} alt="night-sky" className={cx(["sky", ""])} />
        <img src={IMAGES.stars} alt="stars1" className={cx(["stars1", "left-[-50%]"])} />
        <img src={IMAGES.stars} alt="stars2" className={cx(["stars2", "left=[50%]"])} />
        <img src={IMAGES.moon} alt="moon" className={cx(["moon", "mix-blend-screen"])} />
        <img src={IMAGES.flying_bird1} alt="bird1" className={cx(["bird1", ""])} />
        <img src={IMAGES.flying_bird2} alt="bird2" className={cx(["bird2", ""])} />
        <img src={IMAGES.flying_bird2} alt="bird3" className={cx(["bird3", ""])} />
        <img src={IMAGES.night_sea} alt="night-sea" className={cx(["sea", ""])} />
      </section>
    </div>
  )
}
