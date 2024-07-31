const Test = ({ title, questionList }) => {
  const result = questionList.map((element) => {
    return (
      <div className="questions" key={element.question}>
        <section>
          <div className="closed">
            <h4>{element.question}</h4>
            <button>+</button>
            <p className="hide">{element.response}</p>
          </div>
        </section>
      </div>
    );
  });

  return (
    <div className="container blue">
      <h2>{title}</h2>

      {result}
    </div>
  );
};

export default Test;
