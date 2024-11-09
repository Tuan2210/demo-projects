import React from "react";
import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "@routes";

import { Toaster } from "react-hot-toast";

import ScrollToTop from "react-scroll-to-top";

import { ChatBotButton } from "@components/ui";
import { HomeStyle } from "@components/styles";
import ArrowUp from '@data/ArrowUp'
import IMAGES from "@constants/imgUrl";

import classNames from "classnames/bind";
const cx = classNames.bind(HomeStyle);

function App() {
  return (
    <div>
      <RouterProvider router={publicRoutes} />
      <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
      <ScrollToTop
        smooth
        component={<ArrowUp />}
        // svgPath="M12 19.293l-6.293-6.293A1 1 0 0 1 6.707 11H11V4a1 1 0 0 1 2 0v7h4.293a1 1 0 0 1 .707 1.707l-6.293 6.293a1 1 0 0 1-1.414 0z"
        style={{ backgroundColor: 'none', borderRadius: '50%' }}
        color="cyan"
      />
      <ChatBotButton />

      {/* halloween */}
      {/* <div className="fixed top-0 flex justify-between mt-[-1%] w-full">
        <img src={IMAGES.hlwLights} alt="hlwLights1" className={cx(["hlwLights1", ""])} />
        <img src={IMAGES.hlwLights} alt="hlwLights2" className={cx(["hlwLights2", ""])} />
      </div> */}
    </div>
  )
}

export default App
