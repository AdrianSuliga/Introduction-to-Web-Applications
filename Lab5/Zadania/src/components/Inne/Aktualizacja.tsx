import { useState } from "react";

function Aktualizacja() {
  const [product, setProduct] = useState({
    nazwa: "Pomidor",
    cena: 50,
  });

  function handleClick() {
    setProduct((prev) => ({
      ...prev,
      cena: 100,
    }));
  }

  return (
    <div id="ex_4_2" className="main_class">
      <div>
        Aktualnie {product.nazwa} kosztuje {product.cena}
      </div>
      <button onClick={handleClick}>Zmień cenę</button>
    </div>
  );
}

export default Aktualizacja;
