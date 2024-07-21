import {Container, Header} from "./Layout.styled";
import {NavBar} from './../NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
       <Container>
           <Header>
               <NavBar />
           </Header>
           <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
           </Suspense>
       </Container>
       )
   }

