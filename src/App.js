import "./App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];

  return (
    <div className="wrapper">
      {/* add title 'Tests' */}
      <div className="container blue">
        <h2>Test de istorie</h2>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>In ce an a inceput primul razbui mondial ?</h4>
              <button>+</button>
              <p className="hide">1914</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>In ce an a avut loc marea unire ?</h4>
              <button>+</button>
              <p className="hide">1918</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>Cine e fost domnitorul cu cea mai lunga domnie ?</h4>
              <button>+</button>
              <p className="hide">Stefan cel mare, 47 de ani</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>Intre ce ani a domnit stefan cel mare ?</h4>
              <button>+</button>
              <p className="hide">intre anii 1457 și 1504</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>In ce an a intrat romania in primul razboi mondial ?</h4>
              <button>+</button>
              <p className="hide">1916</p>
            </div>
          </section>
        </div>
      </div>
      <div className="container blue">
        <h2>Test de Matematica</h2>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>2 + 5 = ?</h4>
              <button>+</button>
              <p className="hide">7</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>20 - 4 = ?</h4>
              <button>+</button>
              <p className="hide">16</p>
            </div>
          </section>
        </div>
        <div className="questions">
          <section>
            <div className="closed">
              <h4>-9 -10 = ?</h4>
              <button>+</button>
              <p className="hide">-19</p>
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
