import { useEffect, useState } from "react";

function Tytul() {
  const [Title, setTitle] = useState("Lab 5");
  useEffect(() => {
    document.title = Title;
  }, [Title]);

  function handleChange(event: any) {
    setTitle(event.target.value);
  }

  return (
    <div className="main_class">
      <input type="text" value={Title} onChange={handleChange} />
    </div>
  );
}

export default Tytul;
