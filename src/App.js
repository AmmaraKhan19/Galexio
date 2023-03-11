
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 9;
  state = {
    progress: 0
  }

  setprogress = (progress) => {
    this.setState({progress: progress}) 
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='red' progress={this.state.progress} />
          <Routes>
            <Route element={<News setprogress={this.setprogress} pagesize = {this.pagesize} key='home' category="general" />} exact path='/' />
            <Route element={<News setprogress={this.setprogress} pagesize = {this.pagesize} key='business' language="en" category="business" />} exact path='/business' />
            <Route element={<News setprogress={this.setprogress} pagesize = {this.pagesize} key='science' language="en" category="science" />} exact path='/science' />
            <Route element={<News setprogress={this.setprogress} pagesize = {this.pagesize} key='technology' language="en" category="technology" />} exact path='/technology' />
          </Routes>
        </Router>
      </div>
    )
  }
}

