function Ternary() {
  let a: boolean = true;
  let b: boolean = false;

  return (
    <div id="ex_4_1" className="main_class">
      {a ? <div>a jest prawdziwe</div> : <div>a jest fałszywe</div>}
      {b ? <div>b jest prawdziwe</div> : <div>b jest fałszywe</div>}
    </div>
  );
}

export default Ternary;
