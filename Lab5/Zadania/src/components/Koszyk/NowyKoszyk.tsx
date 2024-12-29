import Produkt from "./Produkt";

function NowyKoszyk() {
  let Produkty: readonly string[] = [
    "Pomarańcza",
    "Banan",
    "Mango",
    "Jabłko",
    "Gruszka",
  ];

  return (
    <div id="ex_1_2" className="main_class">
      {Produkty.map((name) => (
        <Produkt nazwa={name} />
      ))}
    </div>
  );
}

export default NowyKoszyk;
