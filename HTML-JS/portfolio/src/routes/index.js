import { createBrowserRouter } from "react-router-dom";

import { Home, PreviewCV } from "@pages";

const publicRoutes = createBrowserRouter([
  // Home
  { path: "/", element: <Home /> },

  // Preview CV
  { path: "/preview-cv", element: <PreviewCV /> },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
