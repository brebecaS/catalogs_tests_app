function Catalog(props) {
  const { listaElevi, title } = props;

  const result = listaElevi.map((element, index) => {
    return (
      <section>
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
