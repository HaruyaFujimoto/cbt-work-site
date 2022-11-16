import React from "react";
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";

// 
import Root from "./routes/root";
import HowToUse from "./routes/howToUse";
import SelfMonitoring from "./routes/selfMonitoring";
import ColumnTechnique from "./routes/columnTechnique";
import TheWorkOfByronKatie from "./routes/theWorkOfByronKatie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>not found page</p>,
  },
  {
    path: "how-to-use",
    element: <HowToUse />, 
  },
  {
    path: "self-monitoring",
    element: <SelfMonitoring />, 
  },
  {
    path: "column-technique",
    element: <ColumnTechnique />,
  },
  {
    path: "the-work-of-byron-katie",
    element: <TheWorkOfByronKatie />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
