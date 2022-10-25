import { Layout } from "antd";
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import './App.css';

const { Content } = Layout

function App() {
  return (
          <Router>
              <Routes>
                <Route path={"/"} element={<Login />}/>
                  <Route path={"/forgotpassword"} element={<ForgotPassword />}/>
              </Routes>
          </Router>
  );
}

export default App;
