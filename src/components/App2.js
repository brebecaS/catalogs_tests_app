import "../App.css";
import Catalog from "./Catalog";
import Test from "./Test";

const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];
  const mathQuestions = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?", "-0 -10 = ?"];
  const historyQuestions = [
    "In ce an a inceput primul razboi mondial ?",
    "In ce an a avut loc marea unire ?",
    "Cine e fost domnitorul cu cea mai lunga domnie ?",
  ];

  return (
    <div className="wrapper">
      <h1>Teste</h1>

      <Test questionsList={mathQuestions} title={"Math Test"} />
      <Test questionsList={historyQuestions} title={"History Test"} />

      <h1>Catalogs</h1>

      <Catalog studentsArray={studentsList1} title={"First Catalog"} />
      <Catalog studentsArray={studentsList2} title={"Second Catalog"} />
    </div>
  );
};

export default App2;
