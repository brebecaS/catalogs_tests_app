import "./App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];

  return (
    <div className="wrapper">
      <Titlu title={"Catalogs"} />
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
