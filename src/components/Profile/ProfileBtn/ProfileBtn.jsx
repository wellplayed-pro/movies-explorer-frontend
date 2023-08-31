import { Link } from "react-router-dom";
import icon from "../../../images/header_icon-main.svg";
import "./ProfileBtn.css";

const ProfileBtn = ({ className }) => {
  return (
    <Link className={`btn profile-btn ${className}`} to="/profile">
      <div className="profile-btn__text">Аккаунт</div>
      <div className="profile-btn__box">
        <img
          className="profile-btn__icon"
          src={icon}
          alt="Изображение иконки профиля"
        />
      </div>
    </Link>
  );
};

export default ProfileBtn;
