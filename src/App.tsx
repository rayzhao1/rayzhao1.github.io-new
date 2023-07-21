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
import { Eff } from './pages/Eff';
import { PathYielder } from './pages/PathYielder'
import { OOP } from './pages/OOP';
import { LinkedLists } from './pages/LinkedLists';

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
          <Route path='/demo/pathyielder' element={<PathYielder/>}/>
          <Route path='/practice' element={<Practice/>}/>
          <Route path='/week2/rec' element={<Rec/>}/>
          <Route path='/week3/treeadt' element={<TreeADT/>}/>
          <Route path='/week3/sequences' element={<Lists/>}/>
          <Route path='/week4/itergen' element={<IterGen/>}/>
          <Route path='/week4/efficiency' element={<Eff/>}/>
          <Route path='/week5/oop' element={<OOP/>}/>
          <Route path='/week5/trees-linked-lists' element={<LinkedLists/>}/>
        </Routes>
    </>
  );
}

export default App;
