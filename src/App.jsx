import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Services } from "./pages/Services/Services";
import { ScrollToTopButton } from './App.styled';
import { FaArrowUp } from 'react-icons/fa';



export const App = () => {
 
 const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
   <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route> 
      </Routes> 
      <ScrollToTopButton visible={showButton} onClick={handleScrollToTop}>
        <FaArrowUp />
      </ScrollToTopButton>
  </>
  );
  
}
