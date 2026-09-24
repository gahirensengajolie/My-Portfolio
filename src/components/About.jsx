import SectionMark from "./SectionMark";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <SectionMark index="01" total="06" name="About" />

        <h2>Curiosity first, code second.</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a junior software developer with a background in Computer
              Science and Software Development. I enjoy building digital
              products that are useful, accessible, and easy to understand.
            </p>

            <p>
              My interests sit across full-stack development, mobile apps,
              backend engineering, and the user experience and product
              decisions that sit around all of it.
            </p>

            <p>
              Before I write code, I try to understand the problem behind the
              product. Good software isn't just working technology — it's
              something that genuinely helps the person using it.
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
  );
}

export default About;
