const Section = (props) => {
  return (
    <section>
      <div className="closed">
        <h4>
          {props.number}.{props.student}
        </h4>
      </div>
    </section>
  );
};

export default Section;
