import React from "react";
import PropTypes from "prop-types";

import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "32px",
      textAlign: "center",
    },
    h2: {
      fontSize: "24px",
    },
    body1: {
      fontSize: "16px",
      textAlign: "center",
    },
  },
});

export default function Template({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{ p: "10px" }}>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

Template.propTypes = {
  children: PropTypes.children,
};
