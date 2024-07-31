function Test() {
  return (
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
  );
}

export default Test;