import "./App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];

  return (
    <div className="wrapper">
      <div className="container blue">
        <h2>Test 1</h2>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>Question text</h4>
              <button>+</button>
            </div>
          </section>
        </div>
      </div>

      <Titlu title={"Catalogs"} />
      <Catalog title={"First Catalog"} listaElevi={listaElevi} />
      <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
    </div>
  );
}

export default App;
