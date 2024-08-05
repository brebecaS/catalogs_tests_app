import "../App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";
import Test from "./Test";
import {
  questionList as mathQuestionList,
  questionList2 as historyQuestionList,
  listaElevi,
  listaElevi2,
  content,
} from "../constants";
import { Fragment } from "react";

function App() {
  // false => null undefined 0 "" NaN falsex

  const newUser = { name: "Ion", age: 20, history: [null] };

  return (
    <div className="wrapper">
      {content === "test" && (
        <Fragment>
          <Titlu title={"Tests"} />
          <Test
            title={"Test de Istorie"}
            questionList={historyQuestionList}
            color={"red"}
          />
          <Test title={"Test de Matematica"} questionList={mathQuestionList} />
        </Fragment>
      )}

      {content === "catalogs" && (
        <>
          <Titlu title={"Catalogs"} />
          <Catalog title={"First Catalog"} listaElevi={listaElevi} />
          <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
        </>
      )}
    </div>
  );

  //   const result = content === "test" ? "Tests" : "Catalogs";
  //   return (
  //     <div className="wrapper">
  //       {content !== "catalogs" ? (
  //         <>
  //           <Titlu title={"Tests"} />
  //           <Test
  //             title={"Test de Istorie"}
  //             questionList={historyQuestionList}
  //             color={"red"}
  //           />
  //           <Test title={"Test de Matematica"} questionList={mathQuestionList} />
  //         </>
  //       ) : (
  //         <>
  //           <Titlu title={"Catalogs"} />
  //           <Catalog title={"First Catalog"} listaElevi={listaElevi} />
  //           <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
  //         </>
  //       )}
  //     </div>
  //   );
}

export default App;
