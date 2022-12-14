import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          mt: 2,
          py: 2,
          textAlign: "center",
          bgcolor: "#ccc",
        }}
      >
        <Link to="/">トップページへ</Link>
      </Box>
    </footer>
  );
}
