import SectionMark from "./SectionMark";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-container">
        <SectionMark index="05" total="06" name="Education" />

        <div className="education-banner">
          <div>
            <h2>CODEHIVE program, AkiraChix</h2>
            <span className="education-note">
              Certificate of Completion from AkiraChix in the CODEHIVE program, a one year intensive software development training for women in Africa.
            </span>
          </div>

          <span className="education-tag">Certificate</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
