import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";

const Content = () => {
  return (
    <>
      <FormInput
        inputId="name"
        labelText="Имя"
        placeholder="Введите имя"
        required
      ></FormInput>
      <FormInput
        inputId="email"
        labelText="E-mail"
        placeholder="Укажите почту"
        inputType="email"
        required
      ></FormInput>
      <FormInput
        inputId="password"
        labelText="Пароль"
        placeholder="Придумайте пароль"
        inputType="password"
        errorText="Что-то пошло не так..."
        required
      ></FormInput>
    </>
  );
};

const Bottom = () => {
  return (
    <>
      <FormButton text="Зарегистрироваться"></FormButton>
      <AuthSubAction
        spanText="Уже зарегистрированы?"
        spanPatch="/signin"
        spanLink="Войти"
      ></AuthSubAction>
    </>
  );
};

const Register = () => {
  return (
    <form>
      <AuthLayout
        title="Добро пожаловать!"
        content={<Content />}
        bottom={<Bottom />}
      ></AuthLayout>
    </form>
  );
};

export default Register;
