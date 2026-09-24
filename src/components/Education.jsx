import SectionMark from "./SectionMark";

function Education() {
  return (
    <section className="education section" id="education">
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
  );
}

export default Education;
