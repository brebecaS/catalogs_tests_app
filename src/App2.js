import "./App.css";
import Section from "./Section";
const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsElements = studentsList1.map((element, index) => {
    return <Section number={index + 1} student={element} />;
  });

  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];
  const studentsElements2 = studentsList2.map((element, index) => {
    return <Section number={index + 1} student={element} />;
  });

  return (
    <div className="wrapper">
      <h1>Catalogs</h1>
      <div className="container">
        <h2>First Catalog</h2>
        <div className="questions">{studentsElements}</div>
      </div>
      <div className="container">
        <h2>Second Catalog</h2>
        <div className="questions">{studentsElements2}</div>
      </div>
    </div>
  );
};
export default App2;
