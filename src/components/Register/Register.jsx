import Form from "../Form/Form";
import AuthLayout from "../Auth/AuthLayout";
import FormButton from "../Form/FormButton";
import AuthSubAction from "../Auth/AuthSubAction";
import FormInput from "../Form/FormInput";

const Register = () => {
  return (
    <AuthLayout title="Добро пожаловать!">
      <Form>
        <div className="form__fields">
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
        </div>

        <div className="form__actions">
          <FormButton text="Зарегистрироваться"></FormButton>
          <AuthSubAction
            spanText="Уже зарегистрированы?"
            spanPatch="/signin"
            spanLink="Войти"
          ></AuthSubAction>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Register;
