import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="link logo__link" to={"/"}>
        <img className="logo__img" src={logo} alt="Логотип" />
      </Link>
    </div>
  );
};

export default Logo;
