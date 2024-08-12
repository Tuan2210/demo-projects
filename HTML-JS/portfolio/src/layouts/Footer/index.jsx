import React, { useEffect, useMemo, useState } from "react";
import IMAGES from "@constants/imgUrl";
import useVisitCount from "@hooks/useVisitCount";

import CopyrightIcon from '@mui/icons-material/Copyright';

import { FooterStyle } from "@components/styles";
import classNames from "classnames/bind";
const cx = classNames.bind(FooterStyle);

export default function Footer() {
  // handle responsive algaes
  const [algaeCount, setAlgaeCount] = useState(9);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 360) {
      setAlgaeCount(3);
    } else if (width <= 480) {
      setAlgaeCount(5);
    } else if (width <= 768) {
      setAlgaeCount(7);
    } else {
      setAlgaeCount(9);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const algaes = useMemo(() => Array(algaeCount).fill(IMAGES.algae), [algaeCount]);
  const Algaes = () => {
    const renderedImages = useMemo(() => {
      return algaes.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image-${index}`}
          className="h-40 mb-[-1.4rem]"
        />
      ));
    }, [algaes]);

    return (
      <div className={cx([`grid-cols-${algaeCount}`, "grid"])}>
        {renderedImages}
      </div>
    );
  };

  // console.log('visit', visits);


  return (
    <footer className="flex flex-col items-center text-white bg-black">
      {/* <div className="flex gap-3 text-[cyan] hover:cursor-default">
        <div className="flex items-center gap-1">
          <CopyrightIcon />
          <p className="text-base">Dinh Quang Tuan</p>
        </div>
        <p className="text-base">|</p>
        <p className="text-base">Visits: {visits}</p>
      </div> */}
      <div className="flex items-center gap-1 text-[cyan] hover:cursor-default">
        <CopyrightIcon />
        <p className="text-base">Dinh Quang Tuan</p>
      </div>
      <Algaes />
      {/* <img src={IMAGES.seabed} className="w-full mt-[-30%]" alt="seabed-img" /> */}
    </footer>
  )
}
