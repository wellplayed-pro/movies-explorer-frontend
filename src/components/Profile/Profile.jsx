import React from "react";
import "./Profile.css";
import Page from "../Page/Page";

const Profile = () => {
  return (
    <Page>
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
          <div className="btn profile__buttons">
            <button className="btn profile__button">Редактировать</button>
            <button className="btn profile__button profile__button_red">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Profile;
