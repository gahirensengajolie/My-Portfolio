import { useState } from "react";
import SectionMark from "./SectionMark";
import Toast from "./Toast";

function Contact() {
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
    <>
      <Toast toast={toast} />

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
                aria-hidden="true"
                className="honeypot-field"
              />

              <button
                type="submit"
                className="primary-button form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
                {status !== "sending" && <span aria-hidden="true">→</span>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
