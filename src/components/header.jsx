import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box
        sx={{
          mb: 1,
          pt: 4,
          px: 2,
          pb: 3,
          bgcolor: "#ddd",
        }}
      >
        <Typography variant="h1" sx={{ mb: 3 }}>
          認知ワークアプリ
        </Typography>
        <Typography>できごとのとらえ方を見直すワーク</Typography>
      </Box>
    </header>
  );
}
