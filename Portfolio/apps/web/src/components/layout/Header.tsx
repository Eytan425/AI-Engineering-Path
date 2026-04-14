import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isPilled, setIsPilled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setIsPilled(window.scrollY > 10)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Ensure the header resets when navigating.
    setIsPilled(false)
  }, [pathname])

  return (
    <header className="site-header">
      <nav className={`pill-nav ${isPilled ? "pill-nav--pilled" : ""}`}>
        <Link to="/" className="nav-link">Eytan&apos;s Portfolio</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
