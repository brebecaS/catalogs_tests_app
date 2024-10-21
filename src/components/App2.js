import "../App.css";
import Catalog from "./Catalog";
import Test from "./Test";
import {
  studentsList1 as students1,
  studentsList2 as students2,
  mathQuestions,
  historyQuestions,
} from "../constants";
import { useState } from "react";

const App2 = () => {
  const [showTable, setShowTable] = useState(`catalogs`);
  const activeButtonStyle = {
    backgroundColor: "green",
    borderColor: "green",
  };
  const inactiveButtonStyle = {};

  return (
    <div className="wrapper">
      <div className={"tab"}>
        <button
          style={
            showTable === "tests" ? activeButtonStyle : inactiveButtonStyle
          }
          className={"tablinks"}
          onClick={() => {
            setShowTable(`tests`);
          }}
        >
          Tests
        </button>
        <button
          style={
            showTable === "catalogs" ? activeButtonStyle : inactiveButtonStyle
          }
          className={"tablinks"}
          onClick={() => {
            setShowTable(`catalogs`);
          }}
        >
          Catalogs
        </button>
      </div>
      {showTable === "tests" && (
        <div>
          <h1>Teste</h1>

          <Test questionsList={mathQuestions} title={"Math Test"} />
          <Test questionsList={historyQuestions} title={"History Test"} />
        </div>
      )}

      {showTable === "catalogs" && (
        <div>
          <h1>Catalogs</h1>

          <Catalog studentsArray={students1} title={"First Catalog"} />
          <Catalog studentsArray={students2} title={"Second Catalog"} />
        </div>
      )}
    </div>
  );
};

export default App2;
