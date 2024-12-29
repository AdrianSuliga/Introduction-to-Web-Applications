import { useState } from "react";
import "./Liczniki.css";

function Licznik() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="ex_2_1" className="main_class">
        <p>Licznik = {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Dodaj</button>
      </div>
    </>
  );
}

export default Licznik;
