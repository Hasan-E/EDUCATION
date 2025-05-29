import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";
// ! 1- Context alanı creat ediyoruz

export const StudentContext = createContext();
const App = () => {
  const [students, setStudents] = useState(data);
  const changeColor = (newId, newColor) => {
    setStudents(
      students.map((i) => (i.id === newId ? { ...i, color: newColor } : i))
    );
  };
  return (
    //! 2-bütün projeye gönderilmek üzere ilk Homu , gönderilecek elemenalar ve Context sayfasıyla sarmallayalım (provide edelim)
    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
