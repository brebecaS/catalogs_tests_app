import StudentMark from "./StudentMark";
const Section = ({ number, student }) => {
  return (
    <section>
      <div className="closed">
        <h4>
          {number}.{student.name}, Grade: {student.grade} {"=> "}{" "}
          <StudentMark grade={student.grade} />
        </h4>
      </div>
    </section>
  );
};

export default Section;
