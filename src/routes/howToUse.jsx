import React from "react";

import HowToUse from "../pages/howToUse";

const how_to_use_router = {
  path: "how-to-use",
  element: <HowToUse />,
  children: [
    {
      path: "step1",
      element: <HowToUse />
    }
  ]
};

export default how_to_use_router;
