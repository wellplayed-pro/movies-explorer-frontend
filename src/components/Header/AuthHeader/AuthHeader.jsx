import Logo from "../../Logo/Logo";
import Navigation from "../../Navigation/Navigation";
import ProfileBtn from "../../Profile/ProfileBtn/ProfileBtn";
import "./AuthHeader.css";

const AuthHeader = () => {
  return (
    <div className="header-content">
      <Logo />
      <Navigation />
      <ProfileBtn className="header-btn header__account-btn" />
    </div>
  );
};

export default AuthHeader;
