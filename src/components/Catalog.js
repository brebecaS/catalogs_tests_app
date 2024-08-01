import React from "react";

function Catalog({ listaElevi, title }) {
  const result = listaElevi.map((element, index) => {
    return (
      <section key={element}>
        <div className="closed">
          <h4>
            {index + 1}. {element}
          </h4>
        </div>
      </section>
    );
  });

  return (
    <div className="container magenta">
      <h2>{title}</h2>
      <div className="questions">{result}</div>
    </div>
  );
}

export default Catalog;
