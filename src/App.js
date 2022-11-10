import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile/>} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;