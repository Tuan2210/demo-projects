import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import IMAGES from "@constants/imgUrl";

import ChatBot from "./ChatBot";

import { ChatBotWidgetStyle } from "@components/styles";

import classNames from "classnames/bind";
const cx = classNames.bind(ChatBotWidgetStyle);

export default function ChatBotButton() {
  const [isDisplay, setIsDisplay] = useState(false)
  const [borderColor, setBorderColor] = useState('none')

  const handleDisplayChatBot = () => {
    const newDisplay = !isDisplay;
    setIsDisplay(newDisplay);

    if (newDisplay) setBorderColor('cyan') // true
    else setBorderColor('none')

  }
  // useEffect(() => {
  //   document.addEventListener('click', function (e) {
  //     if (!e.target.className.includes('MuiButton') && !e.target.className.includes('eveImg') && isDisplay === true)
  //       setBorderColor('cyan')
  //   });
  // }, [])

  return (
    // w-[30rem]
    <div className={cx(["chatBotContainer", "fixed bottom-0 left-0 flex flex-col justify-end w-full z-[99]"])}>
      {/* <div className="order-2"> */}
      <Button
        className="chatBotBtn"
        type="button"
        sx={{
          order: 2,
          width: '2rem',
          borderRadius: '50%',
          border: 1,
          '&:hover': {
            borderColor: 'cyan',
          },
          '&:focus, &:active': {
            borderColor: borderColor,
          },
        }}
        onClick={handleDisplayChatBot}
      >
        <img src={IMAGES.eve} className="eveImg object-contain" />
      </Button>
      {/* </div> */}
      <div className={cx(["chatBotWrapper", `w-[38%] order-1 ${isDisplay ? "flex" : "hidden"}`])}>
        <ChatBot />
      </div>
    </div>
  )
}
