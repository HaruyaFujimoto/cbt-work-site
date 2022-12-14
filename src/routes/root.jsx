import React from "react";
import { createBrowserRouter } from "react-router-dom";

// react element
import Root from "../pages";
// routers
import how_to_use_router from "./howToUse";
import self_monitoring_router from "./selfMonitoring";
import the_work_of_byron_katie_router from "./theWorkOfByronKatie";
import column_technique_router from "./columnTechnique";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>not found page</p>,
  },
  how_to_use_router,
  self_monitoring_router,
  column_technique_router,
  the_work_of_byron_katie_router,
]);

export default router;
