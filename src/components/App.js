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
  return (
    <>
      <div className={"tab"}>
        <button className={"tablinks"} onClick={() => {}}>
          Tests
        </button>
        <button className={"tablinks"} onClick={() => {}}>
          Catalog
        </button>
      </div>

      <div className="wrapper">
        {content === "test" && (
          <Fragment>
            <Titlu title={"Tests"} />
            <Test
              title={"Test de Istorie"}
              questionList={historyQuestionList}
              color={"blue"}
            />
            <Test
              title={"Test de Matematica"}
              questionList={mathQuestionList}
            />
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
    </>
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

// Because newUser has no history, newUser.history[0]?.orders needs to be checked for null or undefined with '?.' operator.
// const newUser = { name: "Ion", age: 20, history: [null] };
// const user = { name: "Ion", age: 20, history: [{ orders: [1, 2] }] };
// const usersList = [newUser, user];

// usersList.map((user) => {
//   return <div>{user.history[0]?.orders}</div>;
// });

export default App;
