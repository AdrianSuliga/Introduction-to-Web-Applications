import { useState } from "react";
import "./Formularze.css";

function Haslo() {
  const [password, setPassword] = useState({
    fstPassword: "",
    sndPassword: "",
  });

  function handleChange(item: any) {
    const { name, value } = item.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function passwordInfo() {
    if (
      password.fstPassword.length === 0 &&
      password.sndPassword.length === 0
    ) {
      return "Proszę wprowadzić hasło";
    } else if (password.fstPassword !== password.sndPassword) {
      return "Hasła nie są zgodne";
    } else {
      return "";
    }
  }

  return (
    <div id="ex_3_2" className="main_class">
      <label>Hasło</label>
      <input
        type="text"
        name="fstPassword"
        value={password.fstPassword}
        onChange={handleChange}
      />
      <br />
      <label>Powtórz hasło:</label>
      <input
        type="text"
        name="sndPassword"
        value={password.sndPassword}
        onChange={handleChange}
      />
      <div>{passwordInfo()}</div>
    </div>
  );
}

export default Haslo;
