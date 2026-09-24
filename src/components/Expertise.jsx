import { expertise } from "../data";
import SectionMark from "./SectionMark";

function Expertise() {
  return (
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
  );
}

export default Expertise;
