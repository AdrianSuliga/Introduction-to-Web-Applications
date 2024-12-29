import { useEffect, useState } from "react";

function EfektLicznik() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log("Licznik zwiększył się do ", count);
  }, [count]);

  return (
    <>
      <div id="ex_2_1" className="main_class">
        <p>Licznik = {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Dodaj</button>
      </div>
    </>
  );
}

export default EfektLicznik;
