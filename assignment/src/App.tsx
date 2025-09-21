import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import WelcomePage from "./components/WelcomePage";
import ElementsPage from "./components/ElementsPage";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import RegisterModal from "./components/RegistrationForm";
import Services from "./components/Services";
import HotDealsSection from "./components/Services"; // fixed spelling
import BlogPages from "./components/BlogsPage";
import BestSellingProducts from "./components/BestSellProduct";
import PagesPage from "./components/PagesPage";
import Home  from "./components/Home";
import ProductShowcase from "./components/ProductShowCase";
import Section2 from "./components/Section2";
import ShopPage from "./components/ShopPage";

import Dashboard from "./pages/Dashboard";
import DLayout from "./Layout/dashBoardLayout";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Discounts from "./pages/Discounts";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Integration from "./pages/Intergration";
import LoginForm from "./components/loginPage";
import AuthPage from "./components/AuthoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public site layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="services" element={<HotDealsSection />} />
          <Route path="blogs" element={<BlogPages />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="pages" element={<PagesPage />} />
          <Route path="best-products" element={<BestSellingProducts />} />
          <Route path="elements" element={<ElementsPage />} />
          <Route path="signup" element={<RegisterModal />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="get-in-touch" element={<Contact />} />
          <Route path="auth" element={<AuthPage />} />
         <Route path="*" element={<div>Page Not Found</div>} /> {/* fallback */}
        </Route>

        {/* Dashboard layout */}
        <Route path="/dashboard" element={<DLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders" element={<Orders />} />
          <Route path="integration" element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
