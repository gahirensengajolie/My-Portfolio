import { profile } from "../data";

const stack = ["React", "Flutter", "FastAPI", "Cypress"];

function Hero({ goToSection }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="status-dot" aria-hidden="true" /> Open to junior developer roles
          </p>
          <h1>Gahire Nsenga Jolie</h1>
          <p className="hero-role">Junior full-stack developer</p>

          <p className="hero-description">
            I build web and mobile apps that are simple to use and tested
            before they ship, from the React or Flutter screen to the FastAPI
            service behind it.
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={() => goToSection("projects")}>
              See my work
            </button>
            {profile.resumeUrl ? (
              <a className="secondary-button" href={profile.resumeUrl} download>
                Download CV
              </a>
            ) : (
              <button className="secondary-button" onClick={() => goToSection("contact")}>
                Get in touch
              </button>
            )}
          </div>

          <ul className="hero-stack" aria-label="Main tools">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="hero-side">
          <div className="portrait">
            <div className="portrait-frame">
              <img
                src="/profile.jpg"
                alt="Portrait of Gahire Nsenga Jolie"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
