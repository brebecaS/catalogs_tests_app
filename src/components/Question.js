const Question = ({ questionObject }) => {
  return (
    <div className="questions" key={questionObject.question}>
      <section>
        <div className="closed">
          <h4>{questionObject.question}</h4>
          <button>+</button>
          <p className="hide">{questionObject.response}</p>
        </div>
      </section>
    </div>
  );
};

export default Question;
