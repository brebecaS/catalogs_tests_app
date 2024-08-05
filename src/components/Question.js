const Question = ({ questionObject }) => {
  const styleObj = {
    display: "block",
  };
  return (
    <div className="questions" key={questionObject.question}>
      <section>
        <div className="closed" style={styleObj}>
          <div>
            <h4>{questionObject.question}</h4>
            <button>+</button>
          </div>

          <p className="hide">
            <b>Raspuns:</b> {questionObject.response}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Question;
