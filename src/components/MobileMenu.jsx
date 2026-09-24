function MobileMenu({ open, goToSection }) {
  if (!open) return null;

  return (
    <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
      <a href="#about" onClick={() => goToSection("about")}>
        About
      </a>
      <a href="#skills" onClick={() => goToSection("skills")}>
        Skills
      </a>
      <a href="#projects" onClick={() => goToSection("projects")}>
        Work
      </a>
      <a href="#contact" onClick={() => goToSection("contact")}>
        Contact
      </a>
    </nav>
  );
}

export default MobileMenu;
