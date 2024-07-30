import "./App.css";
import Catalog from "./Catalog";
import Titlu from "./Titlu";

function App() {
  const listaElevi = ["REbeca", "Andrei", "Ioan"];
  const listaElevi2 = ["Ana", "Ioana", "Ioan"];

  return (
    <div className="wrapper">
      <Titlu title={"Catalogs"} />
      <Catalog title={"First Catalog"} listaElevi={listaElevi} />
      <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
    </div>
  );
}

export default App;
