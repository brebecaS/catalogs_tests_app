const Section = ({ number, student }) => {
  return (
    <section>
      <div className="closed">
        <h4>
          {number}.{student}
        </h4>
      </div>
    </section>
  );
};

export default Section;
