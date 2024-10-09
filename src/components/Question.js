const Question = (props) => {
  return (
    <div className="questions">
      <section style={{}}>
        <div className="closed">
          <h4>{props.questionText}</h4>
          <button>+</button>
          <p className="hide">7</p>
        </div>
      </section>
    </div>
  );
};

export default Question;
