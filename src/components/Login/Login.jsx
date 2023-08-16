import React from 'react';
import './Login.css'
import Form from '../Form/Form';

const Login = () => {
  return (
    <section className='login'>
      <Form
        title='Добро пожаловать!'
        buttonName='Войти'
        spanText='Не зарегистрированы?'
        spanPatch='/signup'
        spanLink='Регистрация'
      >

        <label className='form_label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' type='text' placeholder='Введите почту' />
        <span className='form__span'>Что-то пошло не так...</span>

        <label className='form_label' htmlFor='password'> Пароль </label>
        <input className='form__input' id='name' type='password' placeholder='Введите пароль' />
        <span className='form__span'>Что-то пошло не так...</span>
      </Form>
    </section>
  );
};

export default Login;