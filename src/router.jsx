import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/homePage';
import Product from './Components/product';
import AutocompleteModal from './Components/typeProduct';
import Footer from './Components/footer';
import IconStepper from './Components/stepPay';

export default function AppRoutes() {
    return (
            <Routes>
                {/* <Route path="/" element={<MainLayout/>} /> */}
                <Route path="/product" element={<MainLayout />} />
                <Route path="/typeProduct" element={<AutocompleteModal />} />
            </Routes>
    
    );
}
const MainLayout = () => (
    <div>
        <IconStepper activeStep={0} />
        <Product/>
    </div>
);