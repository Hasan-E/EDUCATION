import { useContext } from "react";
import { UserContext } from "../context/KullaniciProvider";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      {/* API den gelen verilerin ilk 4 ünün isimlerini bastır */}
      {users.slice(0, 4).map((a) => (
        <div style={{ textAlign: "center", background: "pink" }} key={a.id}>
          {a.login}
        </div>
      ))}

      {/* buraya context ile gelen users a alt componente props la yollayabiliriz
        <AnaUser users={users}/> */}
      <AnaUser />
    </div>
  );
};

export default Isimler;
