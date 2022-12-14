import React from "react";

import ColumnTechnique from "../pages/columnTechnique";

const column_technique_router = {
  path: "column-technique",
  element: <ColumnTechnique />,
  children: [
    {
      path: "step1",
      element: <ColumnTechnique />
    }
  ]
};

export default column_technique_router;
