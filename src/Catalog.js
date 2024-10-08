import Section from "./Section";

const Catalog = (props) => {
  const studentsElements = props.studentsArray.map((element, index) => (
    <Section
      number={index + 1}
      student={element}
    />
  ));

  return (
    <div className="container magenta">
      <h2>{props.title}</h2>
      <div className="questions">{studentsElements}</div>
    </div>
  );
};

export default Catalog;
