import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import ScrollProgress from './components/ScrollProgress';
import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import Footer from './layouts/footer';

const App = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
