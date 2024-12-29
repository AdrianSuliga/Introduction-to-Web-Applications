import "./Studenci.css";

interface Student {
  name: string;
  surname: string;
  year: number;
}

function Studenci() {
  let Students: readonly Student[] = [
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
  ];

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
    </div>
  );
}

export default Studenci;
