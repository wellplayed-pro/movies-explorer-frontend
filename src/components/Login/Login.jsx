import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";
import { useFormValidation } from "../../utils/useFormValidator";
import { validationRules } from "../../utils/ValidationRules";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

const Content = ({ handleChange, errors }) => (
  <>
    <FormInput
      inputId="email"
      labelText="E-mail"
      inputType="email"
      required
      placeholder="Укажите почту"
      name="email"
      errorText={errors["email"]?.[0]}
      onChange={handleChange}
    ></FormInput>
    <FormInput
      inputId="password"
      labelText="Пароль"
      placeholder="Придумайте пароль"
      inputType="password"
      name="password"
      errorText={errors["password"]?.[0]}
      onChange={handleChange}
    ></FormInput>
  </>
);

const Bottom = () => (
  <>
    <FormButton text="Войти"></FormButton>
    <AuthSubAction
      spanText="Еще не зарегистрированы?"
      spanPatch="/signup"
      spanLink="Регистрация"
    ></AuthSubAction>
  </>
);

const Login = () => {
  const { signIn } = useContext(CurrentUserContext);

  const { formData, errors, handleChange, isFormValid, setError } =
    useFormValidation(
      {
        email: "",
        password: "",
      },
      { name: validationRules.name, password: validationRules.password }
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    try {
      await signIn(formData);
    } catch (err) {
      setError("email", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <AuthLayout
        title="Рады видеть!"
        content={<Content errors={errors} handleChange={handleChange} />}
        bottom={<Bottom />}
      ></AuthLayout>
    </form>
  );
};

export default Login;
