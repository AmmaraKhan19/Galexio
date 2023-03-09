
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<News pagesize = {6} key='general' country = "us" category="general" />} exact path='/' />
            <Route element={<News pagesize = {6} key='business' country = "us" category="business" />} exact path='/business' />
            <Route element={<News pagesize = {6} key='science' country = "us" category="science" />} exact path='/science' />
            <Route element={<News pagesize = {6} key='technology' country = "us" category="technology" />} exact path='/technology' />
          </Routes>
        </Router>
      </div>
    )
  }
}

