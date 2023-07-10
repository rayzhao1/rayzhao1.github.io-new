import React, { FC } from 'react';
import { Home } from './pages/Home';
import { VarFun } from './pages/VarFun'
import { Intro } from './pages/Intro'
//16:04
import './styles.css';
import Sidebar from './components/Sidebar';
import {Routes, Route} from 'react-router-dom';
import { Control } from './pages/Control';
import { Env } from './pages/Env';
import { Practice } from './pages/Practice'
import { Hof } from './pages/Hof'
import { Rec } from './pages/Rec'
import { TreeADT } from './pages/TreeADT'
import { Lists } from './pages/Lists'
import { IterGen } from './pages/IterGen';
import { Nonplussed } from './pages/Nonplussed'

const App: FC = () => {
  return (
    <>
    <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/week1/intro' element={<Intro/>}/>
          <Route path='/week1/basics' element={<VarFun/>}/>
          <Route path='/week1/control' element={<Control/>}/>
          <Route path='/week2/hofs' element={<Hof/>}/>
          <Route path='/demo/env' element={<Env/>}/>
          <Route path='/demo/nonplussed' element={<Nonplussed/>}/>
          <Route path='/practice' element={<Practice/>}/>
          <Route path='/week2/rec' element={<Rec/>}/>
          <Route path='/week3/treeadt' element={<TreeADT/>}/>
          <Route path='/week3/sequences' element={<Lists/>}/>
          <Route path='/week4/itergen' element={<IterGen/>}/>
        </Routes>
    </>
  );
}

export default App;
