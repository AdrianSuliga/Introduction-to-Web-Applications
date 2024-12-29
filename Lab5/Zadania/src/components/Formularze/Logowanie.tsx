import { useState } from "react";
import "./Formularze.css";

function Logowanie() {
  const [LoginCred, setLoginCred] = useState({
    usrName: "",
    fstPassword: "",
    sndPassword: "",
  });
  const [ButtonState, setButtonState] = useState(true);

  function handleChange(item: any) {
    const { name, value } = item.target;
    setLoginCred((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (
      LoginCred.usrName === "" ||
      LoginCred.fstPassword === "" ||
      LoginCred.sndPassword === ""
    ) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }

  function handleClick() {
    if (LoginCred.fstPassword !== LoginCred.sndPassword) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano pomyślnie");
      setLoginCred(() => ({
        usrName: "",
        fstPassword: "",
        sndPassword: "",
      }));
      setButtonState(true);
    }
  }

  return (
    <div id="ex_3_3" className="main_class">
      <label>Nazwa użytkownika</label>
      <input
        type="text"
        name="usrName"
        value={LoginCred.usrName}
        onChange={handleChange}
      ></input>
      <br />
      <label>Hasło</label>
      <input
        type="text"
        name="fstPassword"
        value={LoginCred.fstPassword}
        onChange={handleChange}
      />
      <br />
      <label>Powtórz hasło:</label>
      <input
        type="text"
        name="sndPassword"
        value={LoginCred.sndPassword}
        onChange={handleChange}
      />
      <br />
      <button disabled={ButtonState} onClick={handleClick}>
        Logowanie
      </button>
    </div>
  );
}

export default Logowanie;
