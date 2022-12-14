import React from "react";

import TheWorkOfByronKatie from "../pages/theWorkOfByronKatie";

const the_work_of_byron_katie_router = {
  path: "the-work-of-byron-katie",
  element: <TheWorkOfByronKatie />,
  children: [
    {
      path: "step1",
      element: <TheWorkOfByronKatie />
    }
  ]
};

export default the_work_of_byron_katie_router;
