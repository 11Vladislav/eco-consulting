import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Services } from "./pages/Services/Services";
// import { Law } from 'pages/Law/Law';
import { CompanyAbout } from 'pages/CompanyAbout/CompanyAbout';
import { ScrollToTopButton } from './App.styled';
import { FaArrowUp } from 'react-icons/fa';
import { Licenses } from 'pages/Licenses/Licenses';
import { Contacts } from 'pages/Contacts/Contacts';
import { ServiceDetail } from 'pages/ServiceDetail/ServiceDetail';


export const App = () => {
 
 const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
          <Route path="poslugy" element={<Services />} />
          <Route path="/poslugy/:slug" element={<ServiceDetail />} />
          {/* <Route path="law" element={<Law />} /> */}
          <Route path="pro-nas" element={<CompanyAbout />} />
          <Route path="litsenzii" element={<Licenses />} />
          <Route path="kontaktu" element={<Contacts/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route> 
      </Routes> 
      <ScrollToTopButton visible={showButton} onClick={handleScrollToTop}>
        <FaArrowUp />
      </ScrollToTopButton>
  </>
  );
  
}
