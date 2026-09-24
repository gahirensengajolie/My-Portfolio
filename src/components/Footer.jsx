function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="logo-mark small">GJ</span>

        <p>
          © {new Date().getFullYear()} Gahire Nsenga Jolie. Built with
          curiosity &amp; code.
        </p>

        <a
          href="https://github.com/gahirensengajolie"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
