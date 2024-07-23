import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Services } from "./pages/Services/Services";
import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margiinTop: '50%',
  margin: "0 auto",
  borderColor: "#006400",
  color: "brown",
};

export const App = () => {

  const [loading, setLoading] = useState(false);
   let [color, setColor] = useState("#006400");
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  },[])

  return (
   <>
    {
      loading ? 
        
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
          :
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route> 
      </Routes> 
    }
  </>
  );
  
}
