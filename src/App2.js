import "./App.css";
import Catalog from "./Catalog";
import Question from "./Question";

const App2 = () => {
  const studentsList1 = ["Clau", "Cata M", "Simo", "Tudor", "George"];
  const studentsList2 = ["Beca", "A Stefan", "Cata", "Mircea", "Cata I"];

  return (
    <div className="wrapper">
      <h1>Teste</h1>
      <div className="container blue">
        <h2>Test de Matematica</h2>
        <Question questionText={"2 + 5 = ?"} />
        <Question questionText={"20 - 4 = ?"} />
        <Question questionText={"-9 -10 = ?"} />
        <Question questionText={"-0 -10 = ?"} />
      </div>

      <div className="container blue">
        <h2>Test de Istorie</h2>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>In ce an a inceput primul razbui mondial ?</h4>
              <button>+</button>
              <p className="hide">7</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>In ce an a avut loc marea unire ?</h4>
              <button>+</button>
              <p className="hide">7</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>Cine e fost domnitorul cu cea mai lunga domnie ?</h4>
              <button>+</button>
              <p className="hide">7</p>
            </div>
          </section>
        </div>
      </div>

      <h1>Catalogs</h1>

      <Catalog studentsArray={studentsList1} title={"First Catalog"} />

      <Catalog studentsArray={studentsList2} title={"Second Catalog"} />
    </div>
  );
};
export default App2;
