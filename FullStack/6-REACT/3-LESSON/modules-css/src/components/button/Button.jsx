// import "./Button.css";
import ButtonSyle from "./Button.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Button = () => {
  return (
    // <div className="wrapper">
    <div className={ButtonSyle.wrapper}>
      {/* <button className="btn btn-blue">Info</button> */}
      <button className={`${ButtonSyle.btn} ${ButtonSyle["btn-blue"]}`}>
        Info
      </button>
      {/* <button className="btn btn-red">Back</button> */}
      <button className={`${ButtonSyle.btn} ${ButtonSyle["btn-red"]}`}>
        Back
      </button>
    </div>
  );
};
export default Button;
