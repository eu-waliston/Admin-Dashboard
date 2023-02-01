import React from 'react';
import './App.css'

import Sidebar from './components/navbar/sidebar/Sidebar'

import Topbar from './components/navbar/topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;
