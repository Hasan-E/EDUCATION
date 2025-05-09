import React, { useState } from "react";

//* Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir.Sadece o noktayı algılar değişmez

//* Mouseenter olayı yalnızca fare işaretçisi div öğesine girdiğinde tetiklenir.

//* Onmousemove olayı, fare işaretçisi div öğesinin üzerinde her hareket ettiğinde tetiklenir.

const MouseEvents = () => {
  const [show, setShow] = useState(false);
  const [koordX, setKoordX] = useState(0);
  const [koordY, setKoordY] = useState(0);
  const mouseEventt = (e) => {
    //? pageX/Ykoordinatlar, oluşturulan sayfanın tamamının sol üst köşesine göredir (kaydırılarak gizlenen parçalar dahil),

    //? clientX/YKoordinatlar sayfanın görünen kısmının sol üst köşesine göredir ve tarayıcı penceresinden "görünür" .

    //? screenX/Yfiziksel ekrana göredir.
    setKoordX(e.pageX);
    setKoordY(e.pageY);
  };

  const klavyeOlayı = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert(`tebrikler rakama bastınız ${e.key}`);
    }
  };
  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        onMouseOver & onMouseLeave
      </div>
      {/* Conditional Rendering veya ternary jsx alanının izin verdiği condition*/}
      <p>{show == true && <span>For detail ....</span>}</p>
      <div
        onMouseMove={mouseEventt}
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
      >
        <span>onMouseMove</span>
      </div>
      <div
        onMouseEnter={mouseEventt}
        id="todo-5"
        className="bg-success text-light w-50 p-4 my-4"
      >
        <span>onMouseEnter</span>
      </div>
      X: {koordX} and Y:{koordY}
      <div>
        <h1>Klavye olayı</h1>
        <input type="text" className="form-control" onKeyDown={klavyeOlayı} />
      </div>
    </div>
  );
};

export default MouseEvents;
