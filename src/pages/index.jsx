import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

// react element
import Template from "../layouts/template";

export default function Root() {
  return (
    <Template>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <h2>はじめましての方へ</h2>
        <Link to="/how-to-use">
          <Button variant="outlined">使い方について</Button>
        </Link>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2.5}
        mt={2}
      >
        <h2>認知を振り返ってみる</h2>
        <span>まずはここから</span>
        <Link to="/self-monitoring">
          <Button variant="outlined">
            セルフモニタリング<br />
          </Button>
        </Link>
        <span>ワーク</span>
        <Link to="/column-technique">
          <Button variant="outlined">コラム法</Button>
        </Link>
        <Link to="/the-work-of-byron-katie">
          <Button variant="outlined">バイロン・ケイティのワーク</Button>
        </Link>
      </Stack>
    </Template>
  );
}
