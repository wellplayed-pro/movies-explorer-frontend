import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";
const Content = () => (
  <>
    <FormInput
      inputId="email"
      labelText="E-mail"
      inputType="email"
      required
      placeholder="Укажите почту"
    ></FormInput>
    <FormInput
      inputId="password"
      labelText="Пароль"
      placeholder="Придумайте пароль"
      inputType="password"
      errorText="Что-то пошло не так..."
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
  return (
    <form>
      <AuthLayout
        title="Рады видеть!"
        content={<Content />}
        bottom={<Bottom />}
      ></AuthLayout>
    </form>
  );
};

export default Login;
