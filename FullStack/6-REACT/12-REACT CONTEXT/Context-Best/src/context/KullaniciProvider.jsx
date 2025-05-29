import { createContext, useEffect, useState } from "react";

//! 1- context alanı açalım
export const UserContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const changeWidth = (newId, myWidth) => {
    setUsers(
      users.map((eleman) =>
        eleman.id === newId ? { ...eleman, width: myWidth } : eleman
      )
    );
  };
  return (
    //! 2- çocukları context açtığımız sayfayla sarmalladık
    <UserContext.Provider value={{ users, changeWidth }}>
      {children}
    </UserContext.Provider>
  );
};

export default KullaniciProvider;
