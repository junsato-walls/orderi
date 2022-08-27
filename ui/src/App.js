import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import TimeCard from './view/timecard/timecard';
import Input from './view/timecard/tc001_input/input';
import Admin from './view/admin/admin';
import NoMatch from './view/nomatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<TimeCard />} />
          <Route path="/input" element={<Input />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;