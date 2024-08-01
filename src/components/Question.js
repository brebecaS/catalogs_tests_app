const Question = ({ questionObject }) => {
  return (
    <div className="questions" key={questionObject.question}>
      <section>
        <div
          className="closed"
          style={{
            display: "block",
          }}
        >
          <div>
            <h4>{questionObject.question}</h4>
            <button>+</button>
          </div>

          <p>{questionObject.response}</p>
        </div>
      </section>
    </div>
  );
};

export default Question;
