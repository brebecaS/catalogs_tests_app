import Section from "./Section";

const Catalog = ({ studentsArray, title }) => {
  const studentsElements = studentsArray.map((element, index) => (
    <Section key={element.name} number={index + 1} student={element} />
  ));

  return (
    <div className="container magenta">
      <h2>{title}</h2>
      <div className="questions">{studentsElements}</div>
    </div>
  );
};

export default Catalog;
