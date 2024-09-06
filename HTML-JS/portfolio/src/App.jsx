import React from "react";
import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "@routes";

import { Toaster } from "react-hot-toast";

import ScrollToTop from "react-scroll-to-top";

import ArrowUp from '@data/ArrowUp'

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

    </div>
  )
}

export default App
