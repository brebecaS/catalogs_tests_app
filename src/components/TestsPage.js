import { Fragment } from "react"
import Titlu from "./Titlu"
import Test from "./Test"
import {
    questionList as mathQuestionList,
    questionList2 as historyQuestionList,
    
  } from "../constants";



const TestsPage = () =>{
   return(
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
   )
}

export default TestsPage;