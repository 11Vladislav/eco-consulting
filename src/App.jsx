import { Routes, Route, Navigate } from "react-router-dom";
import {lazy} from "react";
import  {Layout}  from "./components/Layout/Layout"

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

export const App = () => {
  return (
  <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route> 
      </Routes> 
  );
}
