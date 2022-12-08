import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Router, Navigate, Route, Routes,BrowserRouter } from "react-router-dom";
import Layout from './components/Layout/index';
import { MemberAndVehicle } from './pages/MemberAndVehicle';

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
        <Layout>
          <Routes>
          <Route path='/member' element={<MemberAndVehicle type="member"/>} />
          <Route path='/vehicle' element={<MemberAndVehicle type="vehicle"/>} /> 
          </Routes>
        </Layout>
    </div>
  )
}

export default App;