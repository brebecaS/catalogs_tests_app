import "./App.css";
import Catalog from "./Catalog";
import Question from "./Question";

const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];

  return (
    <div className="wrapper">
      <h1>Teste</h1>
      <div className="container blue">
        <h2>Test de Matematica</h2>
        <Question questionText={"2 + 5 = ?"} />
        <Question questionText={"20 - 4 = ?"} />
        <Question questionText={"-9 -10 = ?"} />
        <Question questionText={"-0 -10 = ?"} />
      </div>

      <h1>Catalogs</h1>

      <Catalog studentsArray={studentsList1} title={"First Catalog"} />

      <Catalog studentsArray={studentsList2} title={"Second Catalog"} />
    </div>
  );
};
export default App2;
