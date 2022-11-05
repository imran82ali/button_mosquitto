import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

//imports components
import Header from './components/Header';
import MainGrid from './components/MainGrid';
// import Newform from './components/Newform';


function App() {
  return (
    <div>
      <Header />
      <Routes>
       <Route exact path="/" element={<MainGrid />} />
       {/* <Route path="/Newform" element={<Newform />} /> */}
     </Routes>
    </div>
     
  );
}

export default App;