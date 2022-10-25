import { Layout } from "antd";
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import CheckYourEmail from "./Pages/ForgotPassword/CheckYourEmail";
import CreatePassword from "./Pages/CreatePassword/CreatePassword";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import TwoFactorAuthentication from "./Pages/TwoFactorAuthentication/TwoFactorAuthentication";
import './App.css';

const { Content } = Layout

function App() {
  return (
          <Router>
              <Routes>
                <Route path={"/"} element={<Login />}/>
                <Route path={"/forgotpassword"} element={<ForgotPassword />}/>
                <Route path={"/checkyouremail"} element={<CheckYourEmail />}/>
                <Route path={"/createpassword"} element={<CreatePassword />}/>
                <Route path={"/termsandconditions"} element={<TermsAndConditions />} />
                <Route path={"/twofactorauthentication"} element={< TwoFactorAuthentication />} />
              </Routes>
          </Router>
  );
}

export default App;
