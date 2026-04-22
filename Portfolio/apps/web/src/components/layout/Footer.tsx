import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Eytan&apos;s Portfolio. All rights reserved.
        </p>
        <nav className="footer-nav">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  )
}