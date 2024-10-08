import "./App.css";
import Catalog from "./Catalog";
import Question from "./Question";

const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];
  const mathQuestions = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?", "-0 -10 = ?"];
  const historyQuestions = [
    "In ce an a inceput primul razboi mondial ?",
    "In ce an a avut loc marea unire ?",
    "Cine e fost domnitorul cu cea mai lunga domnie ?",
  ];

  const mathQuestionElements = mathQuestions.map((element) => {
    return <Question key={element} questionText={element} />;
  });

  const historyQuestionElements = historyQuestions.map((element) => {
    return <Question key={element} questionText={element} />;
  });

  return (
    <div className="wrapper">
      <h1>Teste</h1>
      <div className="container blue">
        <h2>Test de Matematica</h2>
        {mathQuestionElements}
      </div>

      <div className="container blue">
        <h2>Test de Istorie</h2>
        {historyQuestionElements}
      </div>

      <h1>Catalogs</h1>

      <Catalog studentsArray={studentsList1} title={"First Catalog"} />

      <Catalog studentsArray={studentsList2} title={"Second Catalog"} />
    </div>
  );
};
export default App2;
