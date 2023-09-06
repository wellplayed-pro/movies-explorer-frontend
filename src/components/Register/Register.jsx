import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";
import { useFormValidation } from "../../utils/useFormValidator";
import { validationRules } from "../../utils/ValidationRules";
import { register } from "../../utils/MainApi";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

const Content = ({ handleChange, errors }) => {
  return (
    <>
      <FormInput
        inputId="name"
        labelText="Имя"
        placeholder="Введите имя"
        required
        name="name"
        errorText={errors["name"]?.[0]}
        onChange={handleChange}
      ></FormInput>
      <FormInput
        inputId="email"
        labelText="E-mail"
        placeholder="Укажите почту"
        inputType="email"
        name="email"
        errorText={errors["email"]?.[0]}
        onChange={handleChange}
        required
      ></FormInput>
      <FormInput
        inputId="password"
        labelText="Пароль"
        placeholder="Придумайте пароль"
        inputType="password"
        name="password"
        errorText={errors["password"]?.[0]}
        onChange={handleChange}
        required
      ></FormInput>
    </>
  );
};

const Bottom = ({ isDisabled }) => {
  return (
    <>
      <FormButton disabled={isDisabled} text="Зарегистрироваться"></FormButton>
      <AuthSubAction
        spanText="Уже зарегистрированы?"
        spanPatch="/signin"
        spanLink="Войти"
      ></AuthSubAction>
    </>
  );
};

const Register = () => {
  const { signIn } = useContext(CurrentUserContext);
  const { formData, errors, handleChange, isFormValid, setError } =
    useFormValidation(
      {
        nickname: "",
        email: "",
        password: "",
      },
      validationRules
    );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    try {
      await register(formData);
      signIn(formData);
    } catch (err) {
      setError("email", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthLayout
        title="Добро пожаловать!"
        content={<Content errors={errors} handleChange={handleChange} />}
        bottom={<Bottom isDisabled={!isFormValid} />}
      ></AuthLayout>
    </form>
  );
};

export default Register;
