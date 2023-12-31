import React, { FC } from 'react';
import { Su23 } from './pages/Su23';
import { VarFun } from './pages/su23/VarFun'
import { IntroSu23 } from './pages/su23/IntroSu23'
import { IntroFa23 } from './pages/fa23/IntroFa23'
//16:04
import './styles.css';
import Sidebars from './components/Sidebars';
import SidebarsSu23 from './components/SidebarsSu23';
import {Routes, Route} from 'react-router-dom';
import { Control } from './pages/su23/Control';
import { Env } from './pages/su23/Env';
import { Practice } from './pages/su23/Practice'
import { Hof } from './pages/su23/Hof'
import { Rec } from './pages/su23/Rec'
import { TreeADT } from './pages/su23/TreeADT'
import { Lists } from './pages/su23/Lists'
import { IterGen } from './pages/su23/IterGen';
import { Nonplussed } from './pages/su23/Nonplussed'
import { Eff } from './pages/su23/Eff';
import { PathYielder } from './pages/su23/PathYielder'
import { OOP } from './pages/su23/OOP';
import { LinkedLists } from './pages/su23/LinkedLists';
import { Tail } from './pages/su23/Tail';
import { Interpreters } from './pages/su23/Interpreters';
import { Scheme } from './pages/su23/Scheme';
import { SQL } from './pages/su23/SQL';
import { Regex } from './pages/su23/Regex';
import { Fa23_61A } from './pages/Fa23_61A';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { Problems } from './pages/Problems';

// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  //setup
  apiKey: "AIzaSyD4FaZTHTaeivlJnWZo2V5uIJ3gszuPo-Y",
  authDomain: "rayzhao1.firebaseapp.com",
  projectId: "rayzhao1",
  storageBucket: "rayzhao1.appspot.com",
  messagingSenderId: "87121406139",
  appId: "1:87121406139:web:653a2110c45ad67f9aa19e",
  measurementId: "G-21YGNJLFTW",

  // database
  databaseURL: 'https://rayzhao1-default-rtdb.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getDatabase(app);

const App: FC = () => {
  return (
    <>
    <Sidebars />
        <Routes>
          <Route path='/home' element ={<Home/>}/>
          <Route path='/' element={<Fa23_61A/>}/>
          <Route path='/su23/intro' element ={<IntroSu23/>}/>
          <Route path='/fa23/intro' element ={<IntroFa23/>}/>
          <Route path='/su23' element={<Su23/>}/>
          <Route path='/61a/fa23/videos' element={<Videos/>}/>
          <Route path='/61a/fa23/problems' element={<Problems/>}/>
          <Route path='/su23' element={<Su23/>}/>
          <Route path='/su23/week1/intro' element={<IntroSu23/>}/>
          <Route path='/su23/week1/basics' element={<VarFun/>}/>
          <Route path='/su23/week1/control' element={<Control/>}/>
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
          <Route path='/week6/scheme' element={<Scheme/>}/>
          <Route path='/week6/interpreters' element={<Interpreters/>}/>
          <Route path='/week6/tail' element={<Tail/>}/>
          <Route path='/week7/SQL' element={<SQL/>}/>
          <Route path='/week7/regex' element={<Regex/>}/>
        </Routes>
    </>
  );
}
export default App