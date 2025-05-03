import rooster from "../assets/r5.jpg";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright © ROOSTER {new Date().getFullYear()} </p>
      <img src={rooster} alt="rooster" />
    </div>
  );
};

export default Footer;
