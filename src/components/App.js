import "../App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";
import Test from "./Test";
import {
  questionList,
  questionList2,
  listaElevi,
  listaElevi2,
} from "../constants";

function App() {
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
