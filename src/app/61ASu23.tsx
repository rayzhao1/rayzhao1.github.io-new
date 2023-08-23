'use client'
import React from 'react';
import { FC } from 'react';
import {Link, Routes, Router} from 'react-router-dom';
import logo from '../images/favicon.png'
import test from 'public/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import drive from '../images/drive.png';
import AiOutlineDown from 'react-icons/ai'
 
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
  return (
      <main>
      <header>
          <h1>CS 61A</h1> 
          <h4>Fall 2023</h4>
          <div className='center'>
              <PopButton color = "pinkish" msg = "hillo">
                  Info
              </PopButton>
          </div>
      </header>
      <div className='pad'></div>
  </main>
  )
}