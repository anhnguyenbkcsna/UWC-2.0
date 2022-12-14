import React from 'react';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import Layout from './components/Layout/index';
import { MemberAndVehicle } from './pages/MemberAndVehicle';
import TaskAssign from './pages/TaskAssign';
import Calendar from './pages/Calendar';
import { Mcp } from './pages/MCP';

function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path='/member' element={<MemberAndVehicle type="member"/>} />
            <Route path='/vehicle' element={<MemberAndVehicle type="vehicle"/>} />
            <Route path="/assign-task" element={<TaskAssign />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/mcp" element={<Mcp/>}/>
          </Routes>
        </Layout>
    </div>
  )
}

export default App;