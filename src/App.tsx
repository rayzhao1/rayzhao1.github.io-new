import React, { FC } from 'react';
import { Home } from './pages/Home';
import { CS61A } from './pages/CS61A';
import { Wk1 } from './pages/Wk1'
//16:04
import './styles.css';
import Sidebar from './components/Sidebar';
import {Routes, Route} from 'react-router-dom';

const App: FC = () => {
  return (
    <>
    <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cs61a' element={<CS61A/>}/>
          <Route path='/cs61a/week1' element={<Wk1/>}/>
        </Routes>
    </>
  );
}

export default App;
