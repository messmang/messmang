import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Main from './Main';
import ZuzuDetail from './ZuzuDetail';
import SamehereDetail from './SamehereDetail';
import DrivingDetail from './DrivingDetail';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/zuzu" element={<ZuzuDetail />}></Route>
          <Route path="/same-here" element={<SamehereDetail/>}></Route>
          <Route path="/driving-all-right" element={<DrivingDetail/>}></Route>
          <Route path="*" element={<div>F5를 눌러 새로고침해주세요! 문제가 계속된다면 d.messmang.b@gmail.com으로 연락주세요 :)</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;