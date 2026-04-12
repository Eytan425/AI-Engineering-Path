import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
