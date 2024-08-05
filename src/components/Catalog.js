import React from "react";
import Wrapper from "./Wrapper";

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
    <Wrapper>
      <h2>{title}</h2>
      <div className="questions">{result}</div>
    </Wrapper>
  );
}

export default Catalog;
