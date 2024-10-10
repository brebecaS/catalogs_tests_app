import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import ClearIcon from "@mui/icons-material/Clear";

const StudentMark = (props) => {
  if (props.grade >= 5)
    return (
      <span style={{ color: "green" }}>
        <DoneOutlineIcon />
      </span>
    );
  else
    return (
      <span style={{ color: "red" }}>
        <ClearIcon />
      </span>
    );

  //   return props.grade >= 5 ? (
  //     <span style={{ color: "green" }}>Admis</span>
  //   ) : (
  //     <span style={{ color: "red" }}>Respins</span>
  //   );
  //   return (
  //     <>
  //       {props.grade >= 5 && <span style={{ color: "green" }}>Admis</span>}
  //       {props.grade < 5 && <span style={{ color: "red" }}>Respins</span>}
  //     </>
  //   );
};
export default StudentMark;
