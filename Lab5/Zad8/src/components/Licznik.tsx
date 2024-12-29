import { useState } from "react";
import "./Licznik.css";

function Licznik() {
  let init_val = localStorage.getItem("clicks");
  if (init_val === null) {
    init_val = "0";
  }

  const [Clicks, setClicks] = useState(Number(init_val));

  function handleClick() {
    setClicks(Clicks + 1);
    localStorage.setItem("clicks", String(Clicks + 1));
  }

  return (
    <div id="ex_8_1" className="main_class">
      <button id="button_8_1" onClick={handleClick}>
        Dodaj
      </button>
      <p>{Clicks}</p>
    </div>
  );
}

export default Licznik;
