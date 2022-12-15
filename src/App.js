import React from 'react';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import Layout from './components/Layout/index';
import { MemberAndVehicle } from './pages/MemberAndVehicle';
import TaskAssign from './pages/TaskAssign';
import Calendar from './pages/Calendar';
// import {MapBox} from './pages/TaskAssign/Map';
import { Mcp } from './pages/MCP';
import { Home } from './pages/Homepage';

function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/member' element={<MemberAndVehicle type="member"/>} />
            <Route path='/vehicle' element={<MemberAndVehicle type="vehicle"/>} />
            <Route path="/assign-task" element={<TaskAssign />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* <Route path="/map" element={<MapBox />} /> */}
            <Route path="/mcp" element={<Mcp/>}/>
          </Routes>
        </Layout>
    </div>
  )
}

export default App;