import React from "react";

import IMAGES from "@constants/imgUrl";
import { useScrollClick } from "@hooks/useScroll";

import { HeaderStyle } from "@components/styles";
import classNames from "classnames/bind";

const cx = classNames.bind(HeaderStyle);

export default function Header() {

  // menu list
  const menuList = ['Home', 'About', 'Projects', 'Contact']

  return (
    <header className={cx(["header", "grid grid-cols-2 items-center"])}>
      <img src={IMAGES.vnFlag} alt="VN" width={150} className={cx(["vnFlag", "col-span-1"])} />
      <div className={cx(["menuHeader", "col-span-1 text-right flex justify-around"])}>
        {menuList.map((item, index) => (
          <button
            key={index}
            id="basic-button"
            className={cx(["menuItem", "text-[cyan] text-lg outline-0"])}
            onClick={() => useScrollClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  )
}