import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,Outlet
} from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import LoginUserPage from './pages/users/login/LoginPage'
import LoginLayout from './layout/LoginLayout'
import LoginPage from './pages/admin/login/LoginPage.js'
import HomePage from './pages/admin/home/HomePage.js'
import DashboardPage from './pages/admin/dashboard/DashboardPage'
import RegisterPage from './pages/users/register/RegisterPage'
import VaccineLayout from './layout/VaccineLayout'
import DashboardUserPage from './pages/users/dashboard/DashboardPage'

function PrivateRoute({ children }) {
  let auth = localStorage.getItem("userId");
  console.log(auth);
  return auth ? children : <Navigate to="/" />;
}
function PrivateRouteStaff({ children }) {
  let auth = localStorage.getItem("hospitalId")
  console.log(auth);
  return auth ? children : <Navigate to="/staff" />;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route element={<LoginLayout /> }>
            <Route path="" element={<LoginUserPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="" element={<VaccineLayout /> }>
            <Route path="dashboard" element={<PrivateRoute><DashboardUserPage /></PrivateRoute>} />
          </Route>

          <Route path="staff">
            <Route path="" element={<LoginPage />} />
            <Route path="dashboard" element={<PrivateRouteStaff><DashboardPage /></PrivateRouteStaff>} />
          </Route>

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
