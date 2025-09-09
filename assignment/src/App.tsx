import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import ContactForm from "./components/Hero"
import WelcomePage from "./components/WelcomePage"
import About from "./components/Aboutus"
import Contact from "./components/Contact"
import FAQ  from "./components/FAQ"
import  HotDealsSection from "./components/Servises"
import BlogPage from "./components/BlogsPage"; // ✅ corrected import




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="/contact" element={<ContactForm/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/FAQ" element={<FAQ/>} />
      <Route path="/Servises" element={<HotDealsSection/>} />
      <Route path="/BlogsPage" element={<BlogPage />} /> {/* ✅ fixed route */}
      </Route>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
