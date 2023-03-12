
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color='red' progress={progress} />
          <Routes>
            <Route element={<News setprogress={setprogress} apiKey = {apiKey} pagesize = {pagesize} key='home' category="general" />} exact path='/' />
            <Route element={<News setprogress={setprogress} apiKey = {apiKey} pagesize = {pagesize} key='business' language="en" category="business" />} exact path='/business' />
            <Route element={<News setprogress={setprogress} apiKey = {apiKey} pagesize = {pagesize} key='science' language="en" category="science" />} exact path='/science' />
            <Route element={<News setprogress={setprogress} apiKey = {apiKey} pagesize = {pagesize} key='technology' language="en" category="technology" />} exact path='/technology' />
          </Routes>
        </Router>
      </div>
    )
}

export default App;
