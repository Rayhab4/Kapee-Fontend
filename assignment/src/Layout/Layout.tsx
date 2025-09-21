import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar on top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
