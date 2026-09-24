import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "IVHUREDU",
    subtitle: "Farmer Support Platform",
    description:
      "Helps farmers submit service requests over USSD, so the platform stays usable without a data connection.",
    technologies: ["Python", "FastAPI", "Flutter", "USSD"],
    github: "https://github.com/gahirensengajolie",
  },
  {
    title: "Expense Reimbursement System",
    subtitle: "Web Application",
    description:
      "A role-based reimbursement tool for employees, managers, and admins, covering submission, approval, and payout in one flow.",
    technologies: ["React", "Python", "FastAPI", "SQLAlchemy"],
    github: "https://github.com/gahirensengajolie",
  },
  {
    title: "Order Tracking App",
    subtitle: "Mobile Application",
    description:
      "Lets customers place orders and follow their status in real time, built around a simple, low-friction interface.",
    technologies: ["Flutter", "Dart", "API"],
    github: "https://github.com/gahirensengajolie",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Developer Website",
    description:
      "This site — a record of the projects, tools, and interests that make up my path into software development.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/gahirensengajolie",
  },
];

const skills = [
  {
    category: "Frontend",
    accent: "coral",
    items: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
  },
  {
    category: "Mobile",
    accent: "teal",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Backend",
    accent: "gold",
    items: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
  },
  {
    category: "Product & UX",
    accent: "ink",
    items: ["Figma", "UX Research", "Product Management", "QA"],
  },
];

const expertise = [
  {
    title: "Web development",
    accent: "coral",
    description:
      "Building responsive, user-focused web applications with modern frontend and backend tools.",
  },
  {
    title: "Mobile development",
    accent: "teal",
    description:
      "Creating cross-platform apps with Flutter, with an eye on usability and performance on real devices.",
  },
  {
    title: "Backend development",
    accent: "gold",
    description:
      "Designing APIs and services with Python and FastAPI, covering databases, auth, and secure workflows.",
  },
  {
    title: "Product & UX",
    accent: "ink",
    description:
      "Pairing development with product thinking — research, QA, and user-centered design decisions.",
  },
];

// Derives a short category tag and matching accent color from a project's subtitle,
// so the same three-color system used in Skills also organizes the project list.
function projectMeta(subtitle) {
  if (subtitle.includes("Platform")) return { tag: "Platform", accent: "gold" };
  if (subtitle.includes("Mobile")) return { tag: "Mobile app", accent: "teal" };
  return { tag: "Web app", accent: "coral" };
}

function SectionMark({ index, total, name }) {
  return (
    <div className="section-mark">
      <span className="section-index">
        {index}/{total}
      </span>
      <span className="section-name">{name}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [toast, setToast] = useState(null); // { type: "success" | "error", text: string }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    window.setTimeout(() => setToast(null), 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot field: real visitors never see or fill it, so a non-empty
    // value means a bot submitted the form. Silently drop it.
    if (e.target.honeypot.value) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      showToast("error", "Fill in your name, email, and a message first.");
      return;
    }

    setStatus("sending");

    try {
      // FormSubmit relays the message straight to my inbox — no backend to
      // host, and the visitor never leaves the page. The first message ever
      // sent triggers a one-time "activate this form" email to my inbox;
      // after that, every submission arrives directly.
      const response = await fetch(
        "https://formsubmit.co/ajax/gahirensengajolie@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio message from ${name}`,
          }),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      showToast("success", "Message sent — thanks! I'll reply by email soon.");
    } catch {
      setStatus("error");
      showToast(
        "error",
        "Something went wrong sending that. Try emailing me directly instead."
      );
    }
  };
  return (
    <div className="app">
      {toast && (
        <div className={`toast toast-${toast.type}`} role="status">
          {toast.text}
        </div>
      )}

      {/* ================= NAVBAR ================= */}
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

          <nav className="nav-links">
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
              GitHub <span>↗</span>
            </a>

            <button
              className="nav-cta"
              onClick={() => goToSection("contact")}
            >
              Say hello
            </button>

            <button
              className={`nav-toggle ${menuOpen ? "open" : ""}`}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#about" onClick={() => goToSection("about")}>About</a>
          <a href="#skills" onClick={() => goToSection("skills")}>Skills</a>
          <a href="#projects" onClick={() => goToSection("projects")}>Work</a>
          <a href="#contact" onClick={() => goToSection("contact")}>Contact</a>
        </nav>
      )}

      <main>
        {/* ================= HERO ================= */}
        <section className="hero section" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <p className="hero-kicker">
                <span className="status-dot" /> Open to junior developer roles
              </p>

              <h1>Gahire Nsenga Jolie</h1>
              <p className="hero-role">Junior software developer</p>

              <p className="hero-description">
                I build practical web and mobile applications, and I care
                about the product thinking behind them as much as the code.
                Most of what I make starts with a real problem someone is
                having — the goal is always a solution that's simple enough
                to actually use.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => goToSection("projects")}
                >
                  View my work <span>→</span>
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
                  alt="Gahire Nsenga Jolie"
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
                  <span className="status-dot" />
                  Currently
                </div>

                <div className="signature-stack">
                  {skills.map((group) => (
                    <div
                      className="stack-row"
                      key={group.category}
                      data-accent={group.accent}
                    >
                      <span className="stack-dot" />
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
                  View GitHub <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="about section" id="about">
          <div className="section-container">
            <SectionMark index="01" total="06" name="About" />

            <h2>Curiosity first, code second.</h2>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a junior software developer with a background in
                  Computer Science and Software Development. I enjoy building
                  digital products that are useful, accessible, and easy to
                  understand.
                </p>

                <p>
                  My interests sit across full-stack development, mobile
                  apps, backend engineering, and the user experience and
                  product decisions that sit around all of it.
                </p>

                <p>
                  Before I write code, I try to understand the problem behind
                  the product. Good software isn't just working technology —
                  it's something that genuinely helps the person using it.
                </p>
              </div>

              <div className="currently-card">
                <h3>Right now</h3>

                <ul>
                  <li>Building personal and academic projects</li>
                  <li>Sharpening my full-stack development skills</li>
                  <li>Exploring modern web and mobile technologies</li>
                  <li>Open to junior developer opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-container">
            <SectionMark index="02" total="06" name="Skills" />

            <h2>Technologies I work with.</h2>
            <p className="section-description">
              A working set I use to design, build, test, and improve
              digital products — grouped by where each one shows up.
            </p>

            <div className="skills-grid">
              {skills.map((group) => (
                <div
                  className="skill-card"
                  key={group.category}
                  data-accent={group.accent}
                >
                  <h3>{group.category}</h3>

                  <div className="skill-list">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise section">
          <div className="section-container">
            <SectionMark index="03" total="06" name="What I do" />

            <h2>From idea to working product.</h2>

            <div className="expertise-grid">
              {expertise.map((item) => (
                <div
                  className="expertise-card"
                  key={item.title}
                  data-accent={item.accent}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-container">
            <div className="projects-heading">
              <div>
                <SectionMark index="04" total="06" name="Work" />
                <h2>A few things I've shipped.</h2>
              </div>

              <a
                href="https://github.com/gahirensengajolie"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                All projects <span>↗</span>
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project) => {
                const meta = projectMeta(project.subtitle);
                return (
                  <article
                    className="project-card"
                    key={project.title}
                    data-accent={meta.accent}
                  >
                    <div className="project-tagbar">
                      <span className="project-tag">{meta.tag}</span>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        View on GitHub <span>↗</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="education section">
          <div className="section-container">
            <SectionMark index="05" total="06" name="Education" />

            <div className="education-banner">
              <div>
                <h2>Computer Science & Software Development</h2>
                <span className="education-note">
                  Foundation for my journey in software development
                </span>
              </div>

              <span className="education-tag">Bachelor's degree</span>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-container">
            <SectionMark index="06" total="06" name="Contact" />

            <div className="contact-box">
              <div className="contact-content">
                <h2>Have an idea? Let's talk.</h2>

                <p className="contact-description">
                  I'm currently open to junior software development roles,
                  internships, and interesting collaborations. Send a message
                  and I'll get back to you directly.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:gahirensengajolie@gmail.com">
                      gahirensengajolie@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">WhatsApp</span>
                    <a
                      href="https://wa.me/250723222390"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +250 723 222 390
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">GitHub</span>
                    <a
                      href="https://github.com/gahirensengajolie"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/gahirensengajolie ↗
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">Location</span>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you working on?"
                  />
                </div>

                {/* Honeypot — hidden from real users, catches spam bots */}
                <input
                  type="text"
                  name="honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                />

                <button
                  type="submit"
                  className="primary-button form-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  {status !== "sending" && <span>→</span>}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <span className="logo-mark small">GJ</span>

          <p>
            © {new Date().getFullYear()} Gahire Nsenga Jolie. Built with
            curiosity & code.
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
    </div>
  );
}

export default App;