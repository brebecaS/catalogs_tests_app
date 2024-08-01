import "../App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";
import Test from "./Test";
import {
  questionList as mathQuestionList,
  questionList2 as historyQuestionList,
  listaElevi,
  listaElevi2,
} from "../constants";

function App() {
  return (
    <div className="wrapper">
      <Titlu title={"Tests"} />
      <Test
        title={"Test de Istorie"}
        questionList={historyQuestionList}
        color={"red"}
      />
      <Test title={"Test de Matematica"} questionList={mathQuestionList} />

      <Titlu title={"Catalogs"} />
      <Catalog title={"First Catalog"} listaElevi={listaElevi} />
      <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
    </div>
  );
}

export default App;
