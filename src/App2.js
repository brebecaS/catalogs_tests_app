import "./App.css";
import Catalog from "./Catalog";

const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];

  return (
    <div className="wrapper">
      <h1>Catalogs</h1>

      <Catalog studentsArray={studentsList1} />

      <Catalog studentsArray={studentsList2} />
    </div>
  );
};
export default App2;
