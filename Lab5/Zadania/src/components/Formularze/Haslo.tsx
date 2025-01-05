import { useState } from "react";
import "./Formularze.css";

function Haslo() {
  const [password, setPassword] = useState<{
    fstPassword: string;
    sndPassword: string;
  }>({
    fstPassword: "",
    sndPassword: "",
  });
  const [message, setMessage] = useState<string>("Proszę wprowadzić hasło");

  function handleChange(item: any) {
    const { name, value } = item.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));

    const actualFstPassword =
      name === "fstPassword" ? value : password.fstPassword;
    const actualSndPassword =
      name === "sndPassword" ? value : password.sndPassword;

    if (actualFstPassword.length === 0 && actualSndPassword.length === 0) {
      setMessage("Proszę wprowadzić hasło");
    } else if (actualFstPassword !== actualSndPassword) {
      setMessage("Hasła nie są identyczne");
    } else {
      setMessage("");
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
      <div>{message}</div>
    </div>
  );
}

export default Haslo;
