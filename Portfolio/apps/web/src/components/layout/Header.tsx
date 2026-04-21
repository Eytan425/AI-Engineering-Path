import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const PILL_SCROLL_THRESHOLD = 24

const Header = () => {
  const [isPilled, setIsPilled] = useState(false)
  const hasUserInteractedRef = useRef(false)
  const [dark, setDark] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  )
  const { pathname } = useLocation()

  // Update theme and persist it
  useEffect(() => {
    document.body.className = dark ? "dark" : ""
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    const markInteracted = () => {
      hasUserInteractedRef.current = true
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ]

      if (scrollKeys.includes(event.key)) {
        markInteracted()
      }
    }

    const onScroll = () => {
      if (!hasUserInteractedRef.current) {
        setIsPilled(false)
        return
      }

      setIsPilled(window.scrollY > PILL_SCROLL_THRESHOLD)
    }

    window.addEventListener("wheel", markInteracted, { passive: true })
    window.addEventListener("touchmove", markInteracted, { passive: true })
    window.addEventListener("pointerdown", markInteracted, { passive: true })
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("wheel", markInteracted)
      window.removeEventListener("touchmove", markInteracted)
      window.removeEventListener("pointerdown", markInteracted)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    // Ensure the header resets when navigating.
    hasUserInteractedRef.current = false
    setIsPilled(false)
  }, [pathname])

  return (
    <header className="site-header">
      <nav className={`pill-nav ${isPilled ? "pill-nav--pilled" : ""}`}>
        
        <Link to="/" className="nav-link">Eytan&apos;s Portfolio</Link>
        <button onClick={() => setDark(!dark)} className="theme-toggle">{dark ? "🌞" : "🌙"}</button>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        {/* <Link to="/blog" className="nav-link">Blog</Link> */}
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </nav>
    </header>
  )
}

export default Header;
