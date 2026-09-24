import { skills } from "../data";
import SectionMark from "./SectionMark";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <SectionMark index="02" total="06" name="Skills" />

        <h2>Technologies I work with.</h2>
        <p className="section-description">
          A working set I use to design, build, test, and improve digital
          products — grouped by where each one shows up.
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
  );
}

export default Skills;
