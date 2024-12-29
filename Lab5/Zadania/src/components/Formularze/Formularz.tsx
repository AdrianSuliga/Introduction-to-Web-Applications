import { useState } from "react";
import "./Formularze.css";

function Formularz() {
  const [text, setText] = useState("");

  function inputHandler(item: any) {
    setText(item.target.value);
  }

  return (
    <div id="ex_3_1" className="main_class">
      <input type="text" onChange={inputHandler} value={text} />
      <div>{text}</div>
    </div>
  );
}

export default Formularz;
