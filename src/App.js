import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/index';

// components
import { MemberAndVehicle } from './pages/MemberAndVehicle';
import TaskAssign from './pages/TaskAssign';
import Calendar from './pages/Calendar';
import MCPS from './pages/MCPS';
import MapBox from './pages/TaskAssign/Map';

function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path='/member' element={<MemberAndVehicle type="member"/>} />
            <Route path='/vehicle' element={<MemberAndVehicle type="vehicle"/>} />
            <Route path="/assign-task" element={<TaskAssign />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/map" element={<MapBox />} />
            <Route path="/mcp" element={<MCPS/>}/>
          </Routes>
        </Layout>
    </div>
  )
}

export default App;