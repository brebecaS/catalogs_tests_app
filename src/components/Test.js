import Question from "./Question";

const Test = ({ title, questionList }) => {
  const result = questionList.map((element) => {
    return <Question questionObject={element} key={element.question} />;
  });

  return (
    <div className="container blue">
      <h2>{title}</h2>

      {result}
    </div>
  );
};

export default Test;
