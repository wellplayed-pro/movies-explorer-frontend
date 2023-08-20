import Form from "../Form/Form";
import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";

const Login = () => {
  return (
    <AuthLayout title="Рады видеть!">
      <Form>
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

        <FormButton text="Войти"></FormButton>
        <AuthSubAction
          spanText="Еще не зарегистрированы?"
          spanPatch="/signup"
          spanLink="Регистрация"
        ></AuthSubAction>
      </Form>
    </AuthLayout>
  );
};

export default Login;
