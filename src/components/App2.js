import "../App.css";
import Catalog from "./Catalog";
import Test from "./Test";
import {
  studentsList1 as students1,
  studentsList2 as students2,
  mathQuestions,
  historyQuestions,
} from "../constants";

const App2 = () => {
  return (
    <div className="wrapper">
      <div className={"tab"}>
        <button
          className={"tablinks"}
          // onClick={}
        >
          Tests
        </button>
        <button
          className={"tablinks"}
          // onClick={}
        >
          Catalogs
        </button>
      </div>
      <h1>Teste</h1>

      <Test questionsList={mathQuestions} title={"Math Test"} />
      <Test questionsList={historyQuestions} title={"History Test"} />

      <h1>Catalogs</h1>

      <Catalog studentsArray={students1} title={"First Catalog"} />
      <Catalog studentsArray={students2} title={"Second Catalog"} />
    </div>
  );
};

export default App2;
