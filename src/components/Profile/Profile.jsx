import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import FloatActions from "../FloatActions/FloatActions";

const Profile = () => {
  return (
    <div>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div class="profile__content">
          <div className="profile__fields">
            <div className="profile__field">
              <span className="profile__field-title">Имя </span>
              <span className="profile__field-value">Виталий</span>
            </div>
            <div className="profile__field">
              <span className="profile__field-title">E-mail</span>
              <span className="profile__field-value">pochta@yandex.ru</span>
            </div>
          </div>
          <FloatActions>
            <div className="profile__buttons">
              <button className="profile__button">Редактировать</button>
              <button className="profile__button profile__button_red">
                Выйти из аккаунта
              </button>
            </div>
          </FloatActions>
        </div>
      </section>
    </div>
  );
};

export default Profile;
