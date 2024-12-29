import { useState } from "react";
import Przycisk from "./Przycisk";
import "./Liczniki.css";

function NowyLicznik() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div id="ex_2_2" className="main_class">
        <p>Licznik = {count}</p>
        <Przycisk handler={handleClick} />
      </div>
    </>
  );
}

export default NowyLicznik;
