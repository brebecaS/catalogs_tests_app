import "../App.css";
import Sum from "./Sum";

function App() {
  return (
    <div>
      <Sum a="Hello " b="World!" />
      <Sum a={1} b={2} />
      <Sum a={3} b={4} />
      <Sum a={5} b={6} />
      <Sum a={6} b={7} />
    </div>
  );
}

export default App;
