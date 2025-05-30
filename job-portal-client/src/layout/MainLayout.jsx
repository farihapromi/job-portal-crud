import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
   
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4">
        <Outlet />
      </main>

     
      <Footer />
    </div>
  );
};

export default MainLayout;
