import "./App.css";
import Section from "./Section";

const App2 = () => {
  return (
    <div className="wrapper">
      <h1>Catalogs</h1>
      <div className="container">
        <h2>First Catalog</h2>
        <div className="questions">
          <Section name={"1. Clau"} />
          <Section name={"2. Cata M"} />
          <Section name={"3. Simo"} />
          <Section name={"4. Tudor"} />
          <Section name={"5. George"} />
        </div>
      </div>
      <div className="container">
        <h2>Second Catalog</h2>
        <div className="questions">
          <Section name={"1. Beca"} />
          <Section name={"2. A Stefan"} />
          <Section name={"3. Cata"} />
          <Section name={"4. Mircea"} />
          <Section name={"5. Cata I"} />
        </div>
      </div>
    </div>
  );
};

export default App2;
