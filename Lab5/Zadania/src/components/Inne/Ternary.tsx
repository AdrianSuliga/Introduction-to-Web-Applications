function Ternary() {
  let a: boolean = true;
  let b: boolean = false;

  return (
    <div id="ex_4_1" className="main_class">
      {a ? (
        <div>Stwierdzenie a jest prawdziwe</div>
      ) : (
        <div>Stwierdzenie a jest fałszywe</div>
      )}
      {b ? (
        <div>Stwierdzenie b jest prawdziwe</div>
      ) : (
        <div>Stwierdzenie b jest fałszywe</div>
      )}
    </div>
  );
}

export default Ternary;
