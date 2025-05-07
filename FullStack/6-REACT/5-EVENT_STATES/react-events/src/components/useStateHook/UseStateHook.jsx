//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, { useState } from "react";

const UseStateHook = () => {
  // useState tanımlarken istersek initialState(başlangıç değeri tanımlanabilir)
  const [counter, setCounter] = useState(0);

  const arttir = () => {
    setCounter(counter + 1);

    //    if (counter>=10){
    //     setCounter(0)
    //    }
  };

  return (
    <div className="">
      <h1>USESTATE HOOK</h1>
      <h3>Counter:{counter}</h3>
      <button className="btn btn-primary m-2" onClick={arttir}>
        ☝
      </button>
      <button className="btn btn-primary m-2" onClick={() => setCounter(0)}>
        Sıfırla
      </button>

      <button
        className="btn btn-primary m-2"
        onClick={() => setCounter(counter - 1)}
      >
        👇
      </button>
    </div>
  );
};

export default UseStateHook;
