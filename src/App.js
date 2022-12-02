import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Assign from './pages/TaskAssign';

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
            <Assign/>
      {/* <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
      </ThemeProvider> */}
    </div>
  )
}

export default App;