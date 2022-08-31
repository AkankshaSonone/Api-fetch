import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';



export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/users" element={<Users />} />
          </Routes>
        </div>
        
      </Router>
    )
  }
}