import React, { useEffect, useState } from 'react';

import { HolidaysStyle } from '@components/styles'
import classNames from "classnames/bind";
const cx = classNames.bind(HolidaysStyle);

export const LightRope = () => {
  const [numItems, setNumItems] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 360) {
        setNumItems(7);
      } else if (width <= 480) {
        setNumItems(10);
      } else if (width <= 768) {
        setNumItems(17);
      } else if (width <= 992) {
        setNumItems(20);
      } else {
        setNumItems(24);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colors = ['red', 'yellow', 'blue', 'pink', 'green'];
  const generateRandomColors = (num) => {
    const randomColors = [];
    let prevColor = null;

    for (let i = 0; i < num; i++) {
      let newColor;
      do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      } while (newColor === prevColor); // random until not same color
      randomColors.push(newColor);
      prevColor = newColor;
    }

    return randomColors;
  };

  const randomColors = generateRandomColors(numItems);
  const items = randomColors.map((color, index) => (
    <li key={index} className={cx([color, 'relative mt-0 mb-0 ml-4 mr-4 list-none p-0 inline-block w-3 h-7 rounded-[50%] top-9 bg-white'])}></li>
  ));

  return (
    <div className={cx(["light", "w-full h-[15vh] text-center"])}>
      <ul className={cx("line")}>
        {items}
      </ul>
    </div>
  )
}