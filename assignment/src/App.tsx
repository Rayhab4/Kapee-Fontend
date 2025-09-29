import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout & Pages
import Layout from "./Layout/Layout";
import DLayout from "./Layout/dashBoardLayout";

import WelcomePage from "./components/WelcomePage";
import BestSellingProducts from "./components/BestSellProduct";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import RegisterModal from "./components/RegistrationForm";
import LoginPage from "./components/loginPage"; 



import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";
import Discounts from "./pages/Discounts";
import Settings from "./pages/Settings";
import Integration from "./pages/Intergration";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="best-products" element={<BestSellingProducts />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="services" element={<BestSellingProducts />} />
          <Route path="shop" element={<BestSellingProducts />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<RegistrationForm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
