// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import VolcanoListPage from './pages/VolcanoListPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import VolcanoPage from './pages/VolcanoPage';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
       <div style={{ height: '100vh', display: 'flex', flexDirection: 'column'}}>
    
       <div style={{flex:1}}>
       <NavigationBar />
        <Routes>
          <Route path="/"   element={<HomePage />} />
          <Route path="/volcano-list" element={<VolcanoListPage/>} />
          <Route path="/volcano-list/volcano/128" element={<VolcanoPage/>} />
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
