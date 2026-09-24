import { skills } from "../data";

function Hero({ goToSection }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="status-dot" aria-hidden="true" /> Open to junior
            developer roles
          </p>

          <h1>Gahire Nsenga Jolie</h1>
          <p className="hero-role">Junior software developer</p>

          <p className="hero-description">
            I build practical web and mobile applications, and I care about
            the product thinking behind them as much as the code. Most of
            what I make starts with a real problem someone is having — the
            goal is always a solution that's simple enough to actually use.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => goToSection("projects")}
            >
              View my work <span aria-hidden="true">→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => goToSection("contact")}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="hero-side">
          <div className="portrait-card">
            <img
              src="/profile.jpg"
              alt="Portrait of Gahire Nsenga Jolie"
              className="portrait-image"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div className="portrait-fallback">GJ</div>
          </div>

          <div className="signature-card">
            <div className="signature-header">
              <span className="status-dot" aria-hidden="true" />
              Currently
            </div>

            <div className="signature-stack">
              {skills.map((group) => (
                <div
                  className="stack-row"
                  key={group.category}
                  data-accent={group.accent}
                >
                  <span className="stack-dot" aria-hidden="true" />
                  <span className="stack-label">{group.category}</span>
                  <span className="stack-value">
                    {group.items.slice(0, 2).join(", ")}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/gahirensengajolie"
              target="_blank"
              rel="noreferrer"
              className="signature-link"
            >
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
