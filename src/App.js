import "./App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";
import Test from "./Test";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];
  const questionList = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?"];
  const questionList2 = [
    "n ce an a inceput primul razbui mondial ?",
    "In ce an a avut loc marea unire ?",
    "Cine e fost domnitorul cu cea mai lunga domnie ?",
    "Intre ce ani a domnit stefan cel mare ?",
    "In ce an a intrat romania in primul razboi mondial ?",
  ];

  return (
    <div className="wrapper">
      <Titlu title={"Tests"} />
      <Test title={"Test de Istorie"} questionList={questionList2} />
      <Test title={"Test de Matematica"} questionList={questionList} />

      <Titlu title={"Catalogs"} />
      <Catalog title={"First Catalog"} listaElevi={listaElevi} />
      <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
    </div>
  );
}

export default App;
