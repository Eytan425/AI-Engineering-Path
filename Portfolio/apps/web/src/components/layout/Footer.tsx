import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Eytan's Portfolio. All rights reserved.
        </p>
        <nav className="footer-nav">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
