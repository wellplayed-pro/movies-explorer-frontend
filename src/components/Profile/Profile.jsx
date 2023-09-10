import React, { useContext, useMemo, useState } from "react";
import "./Profile.css";
import Page from "../Page/Page";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { useFormValidation } from "../../utils/useFormValidator";
import { validationRules } from "../../utils/ValidationRules";

const Profile = () => {
  const { logout, user, update } = useContext(CurrentUserContext);
  const { errors, formData, handleChange, isFormValid } = useFormValidation(
    {
      name: user.name,
      email: user.email,
    },
    { name: validationRules.name, email: validationRules.email }
  );

  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const canBeSubmited = useMemo(() => {
    const isNameChanged = formData.name !== user.name;
    const isEmailChanged = formData.email !== user.email;

    return isFormValid && (isEmailChanged || isNameChanged);
  }, [formData, user, isFormValid]);

  const handleInput = (evt) => {
    handleChange(evt);
    setError(false);
  };

  const onSubmit = async (evt) => {
    evt?.preventDefault();
    if (isLoading) return;

    setLoading(true);

    if (!canBeSubmited) return;

    try {
      await update(formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <form onSubmit={onSubmit}>
        <section className="profile">
          <h1 className="profile__title">Привет, {user.name}!</h1>
          <div className="profile__content">
            <div className="profile__fields">
              <div className="profile__field">
                <span className="profile__field-title">Имя </span>
                <input
                  className="profile__field-value"
                  value={formData.name}
                  name="name"
                  onChange={handleInput}
                />
              </div>
              <div className="profile__field-error">{errors?.name?.[0]}</div>
              <div className="profile__field">
                <span className="profile__field-title">E-mail</span>
                <div>
                  <input
                    className="profile__field-value"
                    value={formData.email}
                    name="email"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="profile__field-error">{errors?.email?.[0]}</div>
            </div>
          </div>
          {isSuccess && (
            <div className="profile__alert profile__alert_success">
              Успешно обновлено
            </div>
          )}
          {isError && (
            <div className="profile__alert profile__alert_error">
              Ошибка при обновлении
            </div>
          )}
          <div className="profile__spacer"></div>

          <div className="btn profile__buttons">
            <button
              className="btn profile__button"
              disabled={!canBeSubmited}
              type="submit"
            >
              Редактировать
            </button>
            <button
              className="btn profile__button profile__button_red"
              onClick={logout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </section>
      </form>
    </Page>
  );
};

export default Profile;
