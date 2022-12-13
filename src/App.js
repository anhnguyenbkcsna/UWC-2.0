import React from 'react';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Router, Route, Routes } from "react-router-dom";

import Layout from './components/Layout/index';
import { MemberAndVehicle } from './pages/MemberAndVehicle';
import TaskAssign from './pages/TaskAssign';

function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path='/member' element={<MemberAndVehicle type="member"/>} />
            <Route path='/vehicle' element={<MemberAndVehicle type="vehicle"/>} />
            <Route path="/assign-task" element={<TaskAssign />} />
          </Routes>
        </Layout>
    </div>
  )
}

export default App;