import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "@routes";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={publicRoutes} />
      <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
    </div>
  )
}

export default App
