import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
    </ThemeProvider>
  );
};
