import { useEffect, useState } from "react";
import "./Efekty.css";

function Odliczanie() {
  const [IsActive, setIsActive] = useState<boolean>(false);
  const [IsDisabled, setIsDisabled] = useState<boolean>(false);
  const [Licznik, setLicznik] = useState<string>("15.0");
  const [ButtonState, setButtonState] = useState<string>("START");

  useEffect(() => {
    let interval: number;
    if (IsActive) {
      interval = setInterval(() => {
        setLicznik((prev) => {
          let ret = (Number(prev) - 0.1).toFixed(1);
          if (parseFloat(ret) < 1e-10) {
            setIsActive(false);
            setIsDisabled(true);
            setButtonState("Odliczanie zakończone");
            clearInterval(interval);
          }
          return ret;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [IsActive]);

  function handleClick() {
    if (IsActive) {
      setIsActive(false);
      setButtonState("START");
    } else {
      setIsActive(true);
      setButtonState("STOP");
    }
  }

  return (
    <div id="ex_6_3" className="main_class">
      <button disabled={IsDisabled} onClick={handleClick}>
        {ButtonState}
      </button>
      <div id="cnt">{Licznik}</div>
    </div>
  );
}

export default Odliczanie;
