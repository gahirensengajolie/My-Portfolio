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

export default SectionMark;
