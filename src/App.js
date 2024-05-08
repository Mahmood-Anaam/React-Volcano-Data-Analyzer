// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import VolcanoListPage from './pages/VolcanoListPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
       <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
    
       <div style={{flex:1, overflow: 'hidden' }}>
       <NavigationBar />
        <Routes>
          <Route path="/"   element={<HomePage />} />
          <Route path="/volcano-list" element={<VolcanoListPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
        <Footer />
        </div>

        
      </div>
    </Router>
  );
};

export default App;
