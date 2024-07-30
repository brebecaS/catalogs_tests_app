import "./App.css";
import Catalog from "./Catalog";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];

  return (
    <div className="wrapper">
      <h1>Catalogs</h1>
      <Catalog
        title={"First Catalog"}
        numeElev={"John"}
        listaElevi={listaElevi}
      />
      <Catalog
        title={"Second Catalog"}
        numeElev={"Rebeca"}
        listaElevi={listaElevi2}
      />
    </div>
  );
}

export default App;
