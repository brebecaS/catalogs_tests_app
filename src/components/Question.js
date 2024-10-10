import { useState } from "react";

const Question = ({ index, questionText, answer }) => {
  const [isHidden, setIsHidden] = useState(true); // isHidden =false
  const [buttonSign, setButtonSign] = useState("+");

  function handleClick() {
    if (isHidden === true) {
      setIsHidden(false);
      setButtonSign("-");
    } else {
      setIsHidden(true);
      setButtonSign("+");
    }
    // setIsHidden(!isHidden); //true =>  !true => false
    // false => !false => true
    // setIsHidden((previousValue) => !previousValue);
  }

  return (
    <div className="questions">
      <section>
        <div className="closed" style={{ display: "block" }}>
          <div>
            <h4>{questionText}</h4>
            <button onClick={handleClick}>{buttonSign}</button>
          </div>

          <p className={isHidden === true ? "hide" : ""}>
            Raspuns:
            {answer}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Question;
