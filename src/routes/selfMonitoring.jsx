import React from "react";

import SelfMonitoring from "../pages/selfMonitoring";

const self_monitoring_router = {
  path: "self-monitoring",
  element: <SelfMonitoring />,
  children: [
    {
      path: "step1",
      element: <SelfMonitoring />
    }
  ]
};

export default self_monitoring_router;
