import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Services } from "./pages/Services/Services";




export const App = () => {

  return (
   <>
  
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route> 
      </Routes> 
    
  </>
  );
  
}
