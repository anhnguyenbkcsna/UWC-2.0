import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/index';

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#03045E'
  //   },
  //   secondary: {
  //     main: '#00B4D8'
  //   },
  //   tertiary: {
  //     main: '#90E0EF'
  //   },
  // }
});
    
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
        <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;