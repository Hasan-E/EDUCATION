import React from "react";

const Events = () => {
  // message:Statik değişken olduğu için değiştirildiğinde Virtual Domu etkilemedi
  let message = "Nasılsın";

  const handleTikla = (e) => {
    alert("Tıklandı");
    console.log("Tıklandı");
    // Bir event tetiklendiği fonksiyonda event (e) ile sentetik eventlerin bilgilerine ulaşılabilir
    console.log(e);
  };

  const mesajYaz = (msj) => {
    console.log(msj);
  };

  const mesajDegistir = () => {
    message = "Cohort 19'un değerli üyeleri ";
    console.log(message);
  };

  return (
    <div>
      {/* React Eventlerini çağırma yöntemleri */}
      {/* ****************************************************************** */}
      {/* 1- referansını çağırma */}
      <button className="btn btn-primary m-1" onClick={handleTikla}>
        TIKLA
      </button>
      {/* Aşağıdaki şekilde kullanım tıklanmadan çalışacağı ve sayfa yenilendikçe çalışacağı için yanlış bir kullanımdır */}
      {/* <button className='btn btn-primary m-3' onClick={handleTikla()} >TIKLA</button> */}

      {/* *************************************************************** */}
      {/* 2.Yöntem- Doğrudan işlem yaptırma */}
      <button
        className="btn btn-secondary m-1"
        onClick={() => alert("Silindi")}
      >
        SİL
      </button>
      {/* <button className='btn btn-secondary' onClick={()=>handleTikla()}>SİL</button> */}

      {/* Parametre Kullanımı */}
      <button
        className="btn btn-danger m-1"
        onClick={() => mesajYaz("Parametre Kullanımı")}
      >
        MESAJ YAZ
      </button>

      <button className="btn btn-info m-1" onClick={mesajDegistir}>
        MESAJ DEĞİŞTİR
      </button>
      <p>O mesaj buraya gelecek:{message}</p>
    </div>
  );
};

export default Events;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
