import { useState } from "react";
import "./Studenci.css";
import Dodawanie from "./Dodawanie";

function StudentManager() {
  const [Students, setStudents] = useState([
    {
      name: "Adrian",
      surname: "Suliga",
      year: 2023,
    },
    {
      name: "Jan",
      surname: "Nowak",
      year: 2024,
    },
    {
      name: "Krzysztof",
      surname: "Chmiel",
      year: 2023,
    },
  ]);

  function handleChange(newStudent: any) {
    console.log(newStudent.name, newStudent.surname, newStudent.year);
    setStudents((prev) => [...prev, newStudent]);
  }

  return (
    <div className="main_class">
      <table>
        {Students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.year}</td>
          </tr>
        ))}
      </table>
      <Dodawanie props={handleChange} />
    </div>
  );
}

export default StudentManager;
