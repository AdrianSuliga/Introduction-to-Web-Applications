import { useState } from "react";
import { Student } from "./Studenci";

function Dodawanie(props: any) {
  const [NewStudent, setNewStudent] = useState<Student>({
    name: "",
    surname: "",
    year: 2000,
  });

  function addHandler(event: any) {
    const { name, value } = event.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function clickHandler() {
    if (NewStudent.name === "" || NewStudent.surname === "") {
      alert("Proszę uzupełnić formularz");
      return;
    }

    if (
      isNaN(NewStudent.year) ||
      NewStudent.year < 1900 ||
      NewStudent.year > 2025
    ) {
      alert("Proszę wprowadzić właściwy rok");
      return;
    }

    props.props(NewStudent);
    setNewStudent({
      name: "",
      surname: "",
      year: 2000,
    });
  }

  return (
    <div>
      <label>Imie</label>
      <input
        name="name"
        type="text"
        value={NewStudent.name}
        onChange={addHandler}
      />
      <br />
      <label>Nazwisko</label>
      <input
        name="surname"
        type="text"
        value={NewStudent.surname}
        onChange={addHandler}
      />
      <br />
      <label>Rocznik</label>
      <input
        name="year"
        type="text"
        value={NewStudent.year}
        onChange={addHandler}
      />
      <br />
      <button onClick={clickHandler}>Dodaj</button>
    </div>
  );
}

export default Dodawanie;
