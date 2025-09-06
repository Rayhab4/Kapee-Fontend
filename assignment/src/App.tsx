import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import ContactForm from "./components/Hero"
import WelcomePage from "./components/WelcomePage"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<WelcomePage/>}/>
      <Route path="/contact" element={<ContactForm/>} />
      </Route>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
