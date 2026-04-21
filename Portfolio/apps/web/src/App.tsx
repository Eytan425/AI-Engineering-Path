import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/routing/ScrollToTop"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfServices from "./pages/TermsOfServicePage"

// Animation settings: simple fade + slight slide
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      {/* mode="wait" ensures the outgoing page finishes its exit before the new one enters */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <HomePage />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <AboutPage />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <ProjectPage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <ContactPage />
            </motion.div>
          } />
          <Route path="/privacy" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <PrivacyPolicy />
            </motion.div>
          } />
          <Route path="/terms" element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <TermsOfServices />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
