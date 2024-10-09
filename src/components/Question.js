const Question = ({ index, questionText }) => {
  const blackBackgroundStyle = {
    backgroundColor: index === 0 ? "black" : "white",
    color: index === 0 ? "white" : "black",
  };
  //   let blackBackgroundStyle;
  //   if (props.index === 0) {
  //     blackBackgroundStyle = { backgroundColor: "black" };
  //   } else blackBackgroundStyle = { backgroundColor: "white" };

  return (
    <div
      className="questions"
      style={{
        fontSize: 19, // font-size: 19px;
        padding: 10,
        border: "1px solid black",
      }}
    >
      <section>
        <div style={blackBackgroundStyle} className="closed">
          <h4>{questionText}</h4>
          <button>+</button>
          <p className="hide">7</p>
        </div>
      </section>
    </div>
  );
};

export default Question;
