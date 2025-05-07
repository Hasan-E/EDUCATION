import React, { useState } from "react";

const MoreData = () => {
//   const [ad, setAd] = useState("Ayşe");
//   const [soyad, setSoyad] = useState("Gün");
//   const [meslek, setMeslek] = useState("Developer");

const [user,setUser]=useState(
    {
        ad:"Mehmet",
        soyad:"Güneşli",
        meslek:"Developer"
    }
)

//flag kulanımı
const [visible,setVisible]=useState(true)

  return (
    <div>
      <h1>Birden fazla Veri ile Çalışma</h1>

{/* Js ALanı */}

{
    // Short circuit
    visible && 
    <div className="bg-secondary">
    <p>Ad:{user.ad}</p>
    <p>Soyad:{user.soyad}</p>
    <p>Mesleği:{user.meslek}</p>
  </div>
}

    

      <button className="btn btn-primary" onClick={()=>setUser({ad:"Ayşe",soyad:"Benli",meslek:"Developer"})}> GÜNCELLE</button>

      <button className="btn btn-primary mx-3" onClick={()=>setVisible(!visible)}> 

        {visible ? "GİZLE" : "GÖSTER"}

      </button>

      {/* <button className="btn btn-primary m-2" onClick={() => setUser({...user,ad:"Ayşe"})}>
        Ad Değiştir
      </button>
      <button className="btn btn-primary m-2" onClick={() => setUser({...user,soyad:"Evin"})}>
        Soyad Değiştir
      </button>
      <button className="btn btn-primary m-2" onClick={() => setUser({...user,meslek:"Develeoper"})}>
        Meslek Değiştir
      </button> */}
      {/* <button
        className="btn btn-primary m-2"
        onClick={() => setSoyad("Gündüz")}
      >
        Soyad Değiştir
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => setMeslek("Tester")}
      >
        Meslek Değiştir
      </button> */}
    </div>
  );
};

export default MoreData;
