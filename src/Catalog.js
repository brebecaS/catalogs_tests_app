function Catalog(props) {
  const result = props.listaElevi.map((element, index) => {
    return (
      <section>
        <div className="closed">
          <h4>1. {element}</h4>
        </div>
      </section>
    );
  });

  return (
    <div className="container magenta">
      <h2>{props.title}</h2>
      <div className="questions">{result}</div>
    </div>
  );
}

export default Catalog;
