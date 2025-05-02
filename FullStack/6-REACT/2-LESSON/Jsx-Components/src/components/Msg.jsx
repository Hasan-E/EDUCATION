import React from "react";
//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.
// external css
import "./msg.css";

import resim from "../assets/r5.jpg";

const Msg = () => {
  // js alanı
  //! internal css
  const stil = {
    color: "green",
    border: "1px solid red",
    fontFamily: "Tahoma",
  };

  return (
    // jsx (react) alanı
    <div>
      {/* inline css */}
      <h2 style={{ color: "red", fontSize: "50px" }}>burası Msg alanı</h2>

      <p style={stil}>hoşgeldin react</p>

      <img
        className="image"
        src="https://cdn.pixabay.com/photo/2025/02/02/17/46/man-9377284_1280.jpg"
        alt=""
      />
      <img className="image" src={resim} alt="" />

      {/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}
      <img src="./tree.webp" alt="" />
    </div>
  );
};

export default Msg;
