
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
  pagesize = 9;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<News pagesize = {this.pagesize} key='all' category="general" />} exact path='/' />
            <Route element={<News pagesize = {this.pagesize} key='general' language="en" category="general" />} exact path='/general' />
            <Route element={<News pagesize = {this.pagesize} key='business' language="en" category="business" />} exact path='/business' />
            <Route element={<News pagesize = {this.pagesize} key='science' language="en" category="science" />} exact path='/science' />
            <Route element={<News pagesize = {this.pagesize} key='technology' language="en" category="technology" />} exact path='/technology' />
          </Routes>
        </Router>
      </div>
    )
  }
}

