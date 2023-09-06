const required = {
  validator: value => value?.length === 0,
  message: 'Обязательное поле'
}
export const validationRules = {
  name: [
    required,
    {
      validator: (value) => !/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value),
      message: 'Ник может содержать только буквы, дефис и пробел',
    },
  ],
  email: [
    required,
    {
      validator: (value) => !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      message: 'Введите корректный email',
    },
  ],
  password: [
    required,
    {
      validator: (value) => !/^[0-9a-zA-Z\sёЁа-яА-Я_.\- ].{6,}/i.test(value),
      message: 'Пароль должен содержать минимум 6 символов',
    },
  ],
};