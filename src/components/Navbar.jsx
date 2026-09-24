function Navbar({ goToSection, menuOpen, onToggleMenu }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            goToSection("home");
          }}
        >
          <span className="logo-mark">GJ</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a
            href="https://github.com/gahirensengajolie"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <button className="nav-cta" onClick={() => goToSection("contact")}>
            Say hello
          </button>

          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={onToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
