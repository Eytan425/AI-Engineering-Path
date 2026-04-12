import './Header.css'

const Header = () => {
    return (
      <header className = "site-header"><nav className="pill-nav">
        <a href = "/" className = "nav-link">Eytan's Portfolio</a>
        <a href="/about" className="nav-link">About</a>
        <a href = "/projects" className = "nav-link">Projects</a>
        <a href = "/blog" className = "nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav></header>
    );
  };
  

export default Header;
